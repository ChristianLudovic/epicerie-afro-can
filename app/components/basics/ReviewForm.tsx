import { useState } from "react";

interface ReviewFormProps {
    onReviewSubmitted?: () => void;
}

export default function ReviewForm({ onReviewSubmitted }: ReviewFormProps) {
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError('');
        
        try {
            const response = await fetch('/api/reviews', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, message }),
            });
            
            if (response.ok) {
                setSuccess(true);
                setName('');
                setMessage('');
                if (onReviewSubmitted) onReviewSubmitted();
                
                // Réinitialiser le message de succès après 5 secondes
                setTimeout(() => {
                    setSuccess(false);
                }, 5000);
            } else {
                const errorData = await response.json();
                setError(errorData.error || 'Erreur lors de l\'envoi de la review');
            }
        } catch (error) {
            console.error('Erreur:', error);
            setError('Une erreur s\'est produite. Veuillez réessayer plus tard.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form 
            onSubmit={handleSubmit}
            className="flex flex-col space-y-7"
        >
            <div className="space-y-[10px]">
                <h2 className="text-[#FF2727] text-[22px] leading-[130%] font-semibold">
                    Laisser un avis sur le magasin
                </h2>
                <p className="text-[14px] leading-[140%]">
                    Vous pouvez laisser vos impressions sur ce produit dans le respect et la bienveillance.
                </p>
            </div>
            
            {success && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
                    Merci pour votre avis ! Il a été publié avec succès.
                </div>
            )}
            
            {error && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                    {error}
                </div>
            )}
            
            <input 
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="rounded-full text-[14px] py-3 px-5 border border-solid border-[#E0E0E0] w-full focus:outline-none"
                placeholder="Nom *"
                required    
            />
            
            <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="rounded-[20px] h-[120px] text-[14px] py-3 px-5 border border-solid border-[#E0E0E0] w-full focus:outline-none resize-none"
                placeholder="Votre message..."
                required
            />
            
            <button 
                type="submit" 
                disabled={isSubmitting}
                className="bg-[#FF2727] px-6 py-3 rounded-full w-max text-white text-[14px] disabled:bg-gray-400"
            >
                {isSubmitting ? 'Envoi en cours...' : 'Publier'}
            </button>
        </form>
    );
}
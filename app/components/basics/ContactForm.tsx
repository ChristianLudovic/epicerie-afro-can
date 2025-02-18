import { useForm, ValidationError } from "@formspree/react";

export default function ContactForm(){
    const [state, handleSubmit] = useForm("xqaedrdk");
    if (state.succeeded) {
        return <p>Merci pour votre message!</p>;
    }
    return (
      <form 
          onSubmit={handleSubmit}
          className="flex flex-col space-y-5"
      >
          <input 
              type="text" 
              name="name" 
              id="name" 
              className="rounded-full text-[14px] py-3 px-5 border border-solid border-[#E0E0E0] w-full focus:outline-none"
              placeholder="Nom *"
              required    
          />
          <ValidationError 
              prefix="Name" 
              field="text"
              errors={state.errors}
          />
          <input
              id="email"
              type="email" 
              name="email"
              className="rounded-full text-[14px] py-3 px-5 border border-solid border-[#E0E0E0] w-full focus:outline-none"
              placeholder="Email *"
              required
          />
          <ValidationError 
              prefix="Email" 
              field="email"
              errors={state.errors}
          />
          <textarea
                id="message"
                name="message"
                className="rounded-[20px] h-[120px] text-[14px] py-3 px-5 border border-solid border-[#E0E0E0] w-full focus:outline-none resize-none"
                placeholder="Votre message..."
          />
          <ValidationError 
          prefix="Message" 
          field="message"
          errors={state.errors}
          />
          <button 
              type="submit" 
              disabled={state.submitting}
              className="bg-[#FF2727] px-6 py-3 rounded-full w-max text-white text-[14px]"
          >
          Envoyer
        </button>
      </form>
    )
}


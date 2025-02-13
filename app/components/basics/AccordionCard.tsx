interface AccordionCardProps {
    question : string,
    answer : string,
}

export default function AccordionCard({question, answer} : AccordionCardProps){
     return(
        <div>
            <div className="flex items-center justify-between">
                <h3>{question}</h3>
                <div>

                </div>
            </div>
            <p>{answer}</p>
        </div>
     )
}
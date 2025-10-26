import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import styles from "./faqs.module.css";

const faqs = [
    {
        question: "What types of camping experiences do you offer?",
        answer:
            "We offer lakeside tents, forest cabins, glamping setups, and adventure camping trips suitable for families, friends, and solo travelers.",
    },
    {
        question: "How can I book a campsite?",
        answer:
            "You can book your campsite online through our website, call us directly, or visit our reception to reserve your spot.",
    },
    {
        question: "Do you provide equipment for camping?",
        answer:
            "Yes, we provide tents, sleeping bags, cooking gear, and other essential camping equipment for a comfortable stay.",
    },
    {
        question: "Are there activities for kids and families?",
        answer:
            "Absolutely! We have nature trails, bonfires, adventure games, fishing, and guided tours suitable for all ages.",
    },
    {
        question: "Is it possible to organize group events or retreats?",
        answer:
            "Yes, we welcome group bookings, corporate retreats, and special events with customized packages to make your stay memorable.",
    },
];

const FAQs = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.title}>Camping FAQs</h2>
                <p className={styles.description}>
                    Find answers to common questions about booking campsites, camping facilities, adventure activities, and family-friendly experiences at NaturalCampsite.
                </p>
                <div className={styles.faqList}>
                    {faqs.map((faq, index) => (
                        <div key={index} className={styles.faqItem}>
                            <button
                                onClick={() => toggleFAQ(index)}
                                className={styles.faqButton}
                            >
                                <span className={styles.question}>{faq.question}</span>
                                {openIndex === index ? (
                                    <Minus className={styles.icon} />
                                ) : (
                                    <Plus className={styles.icon} />
                                )}
                            </button>
                            {openIndex === index && (
                                <div className={styles.answer}>{faq.answer}</div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQs;

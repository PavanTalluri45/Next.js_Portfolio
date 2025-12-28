"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";

const AccordionContext = React.createContext({});

const Accordion = React.forwardRef(({ type = 'single', collapsible = false, defaultValue, className, children, ...props }, ref) => {
    // Simple single implementation for now, or multiple if array
    const [openItems, setOpenItems] = React.useState(
        Array.isArray(defaultValue) ? defaultValue : defaultValue ? [defaultValue] : []
    );

    const toggleItem = (value) => {
        setOpenItems((prev) => {
            if (type === 'single') {
                if (prev.includes(value) && collapsible) {
                    return [];
                }
                return [value];
            } else {
                // Multiple
                if (prev.includes(value)) {
                    return prev.filter((item) => item !== value);
                } else {
                    return [...prev, value];
                }
            }
        });
    };

    return (
        <AccordionContext.Provider value={{ openItems, toggleItem }}>
            <div ref={ref} className={cn("", className)} {...props}>
                {children}
            </div>
        </AccordionContext.Provider>
    );
});
Accordion.displayName = "Accordion";

const AccordionItem = React.forwardRef(({ className, value, children, ...props }, ref) => (
    <div ref={ref} className={cn("border-b", className)} {...props}>
        {React.Children.map(children, (child) => {
            if (React.isValidElement(child)) {
                return React.cloneElement(child, { value });
            }
            return child;
        })}
    </div>
));
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef(({ className, children, value, ...props }, ref) => {
    const { openItems, toggleItem } = React.useContext(AccordionContext);
    const isOpen = openItems.includes(value);

    return (
        <div className="flex">
            <button
                ref={ref}
                onClick={() => toggleItem(value)}
                className={cn(
                    "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
                    className
                )}
                data-state={isOpen ? "open" : "closed"}
                {...props}
            >
                {children}
                <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
            </button>
        </div>
    );
});
AccordionTrigger.displayName = "AccordionTrigger";

const AccordionContent = React.forwardRef(({ className, children, value, ...props }, ref) => {
    const { openItems } = React.useContext(AccordionContext);
    const isOpen = openItems.includes(value);

    return (
        <AnimatePresence initial={false}>
            {isOpen && (
                <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden text-sm"
                >
                    <div ref={ref} className={cn("pb-4 pt-0", className)} {...props}>
                        {children}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
});
AccordionContent.displayName = "AccordionContent";

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };

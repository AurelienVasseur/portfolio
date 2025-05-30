"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export interface BaseItem {
  id: string | number;
  name: string;
  description: string;
  imageFiles?: string[];
  githubUrl?: string;
  websiteUrl?: string;
  size?: "normal" | "large";
  workInProgress?: boolean;
}

interface LayoutCardsProps<T extends BaseItem> {
  items: T[];
  renderCard: (item: T) => React.ReactNode;
  renderExpanded: (item: T) => React.ReactNode;
}

export function LayoutCards<T extends BaseItem>({ 
  items, 
  renderCard, 
  renderExpanded 
}: LayoutCardsProps<T>) {
  const [selectedId, setSelectedId] = useState<string | number | null>(null);
  const selectedItem = items.find((item) => item.id === selectedId);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && selectedId) {
        setSelectedId(null);
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [selectedId]);

  return (
    <>
      <div className="grid grid-cols-3 gap-6">
        {items.map((item) => (
          <motion.div
            key={item.id}
            layoutId={`card-${item.id}`}
            onClick={() => !item.workInProgress && setSelectedId(item.id)}
            className={`cursor-pointer transition-all flex flex-col col-span-3
              ${item.size === "large" ? "col-span-3 md:col-span-2 h-80" : "md:col-span-1 h-80"}
              ${item.workInProgress ? 'cursor-not-allowed' : ''}
            `}
            style={{ maxWidth: '100%' }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            {renderCard(item)}
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedId && selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/30"
            onClick={() => setSelectedId(null)}
          >
            <motion.div
              layoutId={`card-${selectedId}`}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ 
                type: "spring",
                damping: 30,
                stiffness: 250,
                mass: 0.8
              }}
              className="w-full max-w-4xl mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              {renderExpanded(selectedItem)}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
} 
"use client";

import { useState } from "react";
import Image, { ImageProps } from "next/image";
import Skeleton from "./skeleton";

interface Props extends ImageProps {
    containerClassName?: string;
}

export default function ImageWithPlaceholder({
    containerClassName,
    className,
    alt,
    ...props
}: Props) {
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    return (
        <div className={`relative overflow-hidden ${containerClassName}`}>
            {isLoading && (
                <Skeleton className="absolute inset-0 z-10 w-full h-full rounded-none" />
            )}

            {isError ? (
                <div className="absolute inset-0 flex items-center justify-center bg-foreground/5 text-foreground/20 italic text-xs select-none">
                    Failed to load
                </div>
            ) : (
                <Image
                    {...props}
                    alt={alt}
                    className={`transition-opacity duration-500 select-none ${isLoading ? "opacity-0" : "opacity-100"
                        } ${className}`}
                    onLoad={() => setIsLoading(false)}
                    onError={() => {
                        setIsLoading(false);
                        setIsError(true);
                    }}
                    onContextMenu={(e) => e.preventDefault()}
                    draggable={false}
                />
            )}
        </div>
    );
}

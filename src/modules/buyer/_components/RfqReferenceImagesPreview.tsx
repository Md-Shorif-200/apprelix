"use client";

import { useEffect, useMemo } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { UploadedFile } from "../types/rfq-form.types";

type PreviewImage = UploadedFile | File;

function isUploadedFile(image: PreviewImage): image is UploadedFile {
  return "url" in image && "publicId" in image;
}

type RfqReferenceImagesPreviewProps = {
  images: PreviewImage[];
  title?: string;
  onRemove: (index: number) => void;
};

export function RfqReferenceImagesPreview({
  images,
  title = "Selected Reference Images",
  onRemove,
}: RfqReferenceImagesPreviewProps) {
  const previews = useMemo(
    () =>
      images.map((image) =>
        isUploadedFile(image)
          ? { src: image.url, isBlob: false, key: image.publicId }
          : {
              src: URL.createObjectURL(image),
              isBlob: true,
              key: `${image.name}-${image.size}-${image.lastModified}`,
            },
      ),
    [images],
  );

  useEffect(() => {
    return () => {
      previews.forEach((preview) => {
        if (preview.isBlob) URL.revokeObjectURL(preview.src);
      });
    };
  }, [previews]);

  if (images.length === 0) return null;

  return (
    <div className="mb-3 space-y-2">
      <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
        {title}
      </p>
      <div className="grid grid-cols-3 gap-2 sm:grid-cols-4">
        {previews.map((preview, index) => (
          <div
            key={preview.key || index}
            className="group relative overflow-hidden rounded-lg border border-gray-200"
          >
            {preview.isBlob ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={preview.src}
                alt={`Reference ${index + 1}`}
                className="h-20 w-full object-cover"
              />
            ) : (
              <Image
                src={preview.src}
                alt={`Reference ${index + 1}`}
                width={100}
                height={100}
                className="h-20 w-full object-cover"
              />
            )}
            <button
              type="button"
              onClick={() => onRemove(index)}
              className="absolute top-1 right-1 flex h-5 w-5 items-center justify-center rounded-full bg-white/90 text-gray-500 shadow-sm hover:text-red-500"
            >
              <X size={12} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

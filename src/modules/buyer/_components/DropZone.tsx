// src/components/shared/DropZone.tsx

"use client";

import { useRef, useState } from "react";
import { File, X } from "lucide-react";

// Helper to format file size
const formatBytes = (bytes: number, decimals = 2) => {
  if (bytes === 0) return "0 Bytes";
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
};

type DropZoneProps = {
  label: string;
  hint: string;
  accept?: string;
  multiple?: boolean;
  icon: React.ElementType;
  onChange?: (files: File[]) => void;
  value?: File[];
};

export default function DropZone({
  label,
  hint,
  accept,
  multiple = false,
  icon: Icon,
  onChange,
}: DropZoneProps) {
  const [files, setFiles] = useState<File[]>([]);
  const [dragging, setDragging] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFiles = (newFiles: File[]) => {
    const updatedFiles = multiple ? [...files, ...newFiles] : newFiles;
    setFiles(updatedFiles);
    onChange?.(updatedFiles);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragging(false);
    if (e.dataTransfer.files) {
      handleFiles(Array.from(e.dataTransfer.files));
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      handleFiles(Array.from(e.target.files));
    }
  };

  const removeFile = (indexToRemove: number) => {
    const updatedFiles = files.filter((_, index) => index !== indexToRemove);
    setFiles(updatedFiles);
    onChange?.(updatedFiles);
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <label className="block text-xs font-semibold uppercase tracking-wide text-gray-500 mb-1">
          {label}
        </label>

      </div>
      <div
        onDragOver={(e) => {
          e.preventDefault();
          setDragging(true);
        }}
        onDragLeave={() => setDragging(false)}
        onDrop={handleDrop}
        onClick={() => inputRef.current?.click()}
        className={`cursor-pointer rounded-xl border-2 border-dashed px-6 py-8 text-center transition-all ${
          dragging
            ? "border-teal-400 bg-teal-50"
            : "border-gray-200 bg-gray-50/60 hover:border-teal-300 hover:bg-teal-50/40"
        }`}
      >
        <Icon size={24} className="mx-auto mb-2 text-gray-300" />
        <p className="text-sm font-medium text-gray-500">
          Click or drag files to upload
        </p>
        <p className="mt-0.5 text-xs text-gray-400">{hint}</p>
        <input
          ref={inputRef}
          type="file"
          accept={accept}
          multiple={multiple}
          className="hidden"
          onChange={handleChange}
        />
      </div>
      {files.length > 0 && (
        <div className="mt-1 space-y-1.5">
          {files.map((file, i) => (
            <div
              key={i}
              className="flex items-center gap-2.5 rounded-xl border border-gray-100 bg-white px-3 py-2"
            >
              <File size={13} className="shrink-0 text-teal-500" />
              <span className="flex-1 truncate text-xs text-gray-600">
                {file.name}
              </span>
              <span className="text-[10px] text-gray-400">
                {formatBytes(file.size)}
              </span>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  removeFile(i);
                }}
                className="text-gray-300 hover:text-red-400"
              >
                <X size={13} />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

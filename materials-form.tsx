"use client"

import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Plus } from "lucide-react"
import { AttachmentButton } from "./attachment-button"

export function MaterialsForm() {
  return (
    <div className="max-w-3xl w-full mx-auto p-6">
      <form className="space-y-8">
        <div className="space-y-4">
          <Input placeholder="Title" className="text-lg p-4 bg-gray-100 border-0" />
          <Textarea placeholder="Description (Optional)" className="min-h-[200px] p-4 bg-gray-100 border-0" />
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium">Attach</h3>
          <div className="flex gap-8">
            <AttachmentButton
              icon={
                <img
                  src="https://www.google.com/drive/static/images/drive/logo-drive.png"
                  alt="Google Drive"
                  className="w-6 h-6"
                />
              }
              label="Drive"
            />
            <AttachmentButton
              icon={
                <img
                  src="https://www.youtube.com/s/desktop/7c155e84/img/favicon_144x144.png"
                  alt="YouTube"
                  className="w-6 h-6"
                />
              }
              label="Youtube"
            />
            <AttachmentButton icon={<Plus className="w-6 h-6" />} label="Create" />
            <AttachmentButton icon={<Plus className="w-6 h-6" />} label="Upload" />
            <AttachmentButton icon={<Plus className="w-6 h-6" />} label="Link" />
          </div>
        </div>
      </form>
    </div>
  )
}


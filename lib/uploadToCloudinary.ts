// lib/uploadToCloudinary.ts
import cloudinary from "@/lib/cloudinary";

export async function uploadToCloudinary(
  file: File,
  folder = "hotels"
): Promise<string> {
  const buffer = Buffer.from(await file.arrayBuffer());

  const uploadResult = await new Promise<any>((resolve, reject) => {
    cloudinary.uploader.upload_stream(
      { folder },
      (error, result) => {
        if (error) reject(error);
        else resolve(result);
      }
    ).end(buffer);
  });

  return uploadResult.secure_url;
}

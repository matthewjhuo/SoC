import os
import glob
import pymupdf4llm

base_dir = r"c:\Users\卓\Desktop\antigravity\SoC"

def main():
    pdf_files = glob.glob(os.path.join(base_dir, "*.pdf"))
    print(f"Found {len(pdf_files)} PDF files.")
    
    for pdf_path in pdf_files:
        try:
            print(f"Converting: {os.path.basename(pdf_path)}")
            md_text = pymupdf4llm.to_markdown(pdf_path)
            md_path = pdf_path.replace(".pdf", ".md")
            
            with open(md_path, "w", encoding="utf-8") as f:
                f.write(md_text)
            print(f"  -> Saved {os.path.basename(md_path)}")
        except Exception as e:
            print(f"  [X] Failed: {e}")

if __name__ == "__main__":
    main()

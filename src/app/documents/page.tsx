import Link from "next/link";

const DocumentsPage = () => {
    return (
        <div>
            Click <Link href={"documents/123"}> <span className="text-blue-500 underline">here</span> </Link>
        </div>
    )
}

export default DocumentsPage; 
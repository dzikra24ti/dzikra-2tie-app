export default function PageHeader({ title = "Dashboard", currentBreadcrumb = "Order List" }) {
    return (
        <div id="pageheader-container" className="flex items-center justify-between p-4 ">
            <div id="pageheader-left" className="flex flex-col">
                {/* Judul Halaman */}
                <h1 id="page-title" className="text-3xl font-bold text-gray-900 tracking-wide">
                    {title}
                </h1>
                
                {/* Breadcrumb */}
                <div id="breadcrumb-links" className="flex items-center text-sm font-medium space-x-2 mt-1">
                    <span id="breadcrumb-home" className="text-gray-400">Dashboard</span>
                    <span id="breadcrumb-separator" className="text-gray-400">/</span>
                    <span id="breadcrumb-current" className="text-gray-500">{currentBreadcrumb}</span>
                </div>
            </div>
        </div>
    );
}
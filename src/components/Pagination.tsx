type PaginationProps = {
    handlePagination: (url: string | null | undefined) => void,
    meta: {
        next_page_url?: string | null,
        prev_page_url?: string | null,
        from?: string | null,
        to?: string | null,
        total?: string | null,
    }
}

export default function Pagination({ meta, handlePagination } : PaginationProps) {
    return (
        <nav
            aria-label="Pagination"
            className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6"
        >
            <div className="hidden sm:block">
                <p className="text-sm text-gray-700">
                    Showing <span className="font-medium">{ meta?.from}</span> to <span className="font-medium">{meta?.to}</span> of{' '}
                    <span className="font-medium">{meta?.total}</span> results
                </p>
            </div>
            <div className="flex flex-1 justify-between sm:justify-end">
                {meta?.prev_page_url ? 
                    <a
                        onClick={() => handlePagination(meta?.prev_page_url)}
                        href="#"
                        className="relative inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline-offset-0"
                    >
                        Previous
                    </a> : null
                }
                {meta?.next_page_url ? 
                    <a
                        href="#"
                        onClick={() => handlePagination(meta?.next_page_url)}
                        className="relative ml-3 inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline-offset-0"
                    >
                        Next
                    </a>
                    : null
                }
            </div>
        </nav>
    )
}

// export default Pagination;
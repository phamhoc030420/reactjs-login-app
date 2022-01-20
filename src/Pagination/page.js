import { useState, useEffect } from 'react'
function Page() {
    const [pagination, setPagination] = useState({
        page: 1,
        limit: 8,
        totalRows: 1
    });

}
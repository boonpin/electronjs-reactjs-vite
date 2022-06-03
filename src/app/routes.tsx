import { Route, Routes } from "react-router-dom";

import { Bootstrap } from "@/src/app/containers";

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="*" element={<Bootstrap />} />
        </Routes>
    );
};

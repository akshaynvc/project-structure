import React, { ReactNode, FC} from 'react';
import { Navigate } from 'react-router-dom'

type ProtectedRouteProps = {
    children:ReactNode,
    isSignedIn:boolean
}

const ProtectedRoute:FC<ProtectedRouteProps> = ({children, isSignedIn}) => {
    if (!isSignedIn) {
        return <Navigate to="/" replace />;
    }
    return <>{children}</>;
}

export default ProtectedRoute

import React, { useState, createContext, ReactNode } from 'react';

// Define the types for your props and state
interface ChildContainerProps {
    children: ReactNode;
}

interface LayoutConfig {
    ripple: boolean;
    inputStyle: string;
    menuMode: string;
    colorScheme: string;
    theme: string;
    scale: number;
}

interface LayoutState {
    staticMenuDesktopInactive: boolean;
    overlayMenuActive: boolean;
    profileSidebarVisible: boolean;
    configSidebarVisible: boolean;
    staticMenuMobileActive: boolean;
    menuHoverActive: boolean;
}

interface LayoutContextProps {
    layoutConfig: LayoutConfig;
    setLayoutConfig: React.Dispatch<React.SetStateAction<LayoutConfig>>;
    layoutState: LayoutState;
    setLayoutState: React.Dispatch<React.SetStateAction<LayoutState>>;
    onMenuToggle: () => void;
    showProfileSidebar: () => void;
}

// Create the context
export const LayoutContext = createContext<LayoutContextProps>({} as LayoutContextProps);

export const LayoutProvider: React.FC<ChildContainerProps> = ({ children }) => {
    // Initialize state with types
    const [layoutConfig, setLayoutConfig] = useState<LayoutConfig>({
        ripple: false,
        inputStyle: 'outlined',
        menuMode: 'static',
        colorScheme: 'light',
        theme: 'lara-light-indigo',
        scale: 14,
    });

    const [layoutState, setLayoutState] = useState<LayoutState>({
        staticMenuDesktopInactive: false,
        overlayMenuActive: false,
        profileSidebarVisible: false,
        configSidebarVisible: false,
        staticMenuMobileActive: false,
        menuHoverActive: false,
    });

    // Toggle menu state functions
    const onMenuToggle = () => {
        if (isOverlay()) {
            setLayoutState((prevLayoutState) => ({
                ...prevLayoutState,
                overlayMenuActive: !prevLayoutState.overlayMenuActive,
            }));
        }

        if (isDesktop()) {
            setLayoutState((prevLayoutState) => ({
                ...prevLayoutState,
                staticMenuDesktopInactive: !prevLayoutState.staticMenuDesktopInactive,
            }));
        } else {
            setLayoutState((prevLayoutState) => ({
                ...prevLayoutState,
                staticMenuMobileActive: !prevLayoutState.staticMenuMobileActive,
            }));
        }
    };

    // Show profile sidebar function
    const showProfileSidebar = () => {
        setLayoutState((prevLayoutState) => ({
            ...prevLayoutState,
            profileSidebarVisible: !prevLayoutState?.profileSidebarVisible,
        }));
    };

    // Helper functions
    const isOverlay = () => {
        return layoutConfig.menuMode === 'overlay';
    };

    const isDesktop = () => {
        return window.innerWidth > 991;
    };

    // Provide the state and functions to children
    const value: LayoutContextProps = {
        layoutConfig,
        setLayoutConfig,
        layoutState,
        setLayoutState,
        onMenuToggle,
        showProfileSidebar,
    };

    return <LayoutContext.Provider value={value}>{children}</LayoutContext.Provider>;
};
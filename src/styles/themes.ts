// Theme definitions for the application
export type ThemeType = 'light' | 'dark' | 'sunset' | 'earthy' | 'sunrise';

export interface ThemeStyle {
    primaryColor: string;
    secondaryColor: string;
    backgroundColor: string;
    cardBackground: string;
    textColor: string;
    textSecondary: string;
    hoverColor: string;
    borderColor: string;
    shadowColor: string;
}

// Define theme variables for each theme
export const themeStyles: Record<ThemeType, ThemeStyle> = {
    light: {
        primaryColor: '#5046e5',
        secondaryColor: '#6c63ff',
        backgroundColor: '#f5f7fa',
        cardBackground: '#ffffff',
        textColor: '#333333',
        textSecondary: '#666666',
        hoverColor: '#4338ca',
        borderColor: '#e2e8f0',
        shadowColor: 'rgba(0, 0, 0, 0.05)'
    },
    dark: {
        primaryColor: '#6c63ff',
        secondaryColor: '#8b85ff',
        backgroundColor: '#121212',
        cardBackground: '#1e1e1e',
        textColor: '#e2e2e2',
        textSecondary: '#a0a0a0',
        hoverColor: '#7c74ff',
        borderColor: '#2a2a2a',
        shadowColor: 'rgba(0, 0, 0, 0.2)'
    },
    sunset: {
        primaryColor: '#ff6b6b',
        secondaryColor: '#ff8c8c',
        backgroundColor: '#2a1215',
        cardBackground: '#3a1d20',
        textColor: '#fff0e5',
        textSecondary: '#ffc2b5',
        hoverColor: '#e05252',
        borderColor: '#4e282c',
        shadowColor: 'rgba(255, 107, 107, 0.25)'
    },
    sunrise: {
        primaryColor: '#ff9500',
        secondaryColor: '#ffbd00',
        backgroundColor: '#fff8e6',
        cardBackground: '#ffffff',
        textColor: '#333333',
        textSecondary: '#666666',
        hoverColor: '#e68600',
        borderColor: '#fff2cc',
        shadowColor: 'rgba(255, 149, 0, 0.1)'
    },
    earthy: {
        primaryColor: '#6b8e23',
        secondaryColor: '#8fbc8f',
        backgroundColor: '#f5f5dc',
        cardBackground: '#ffffff',
        textColor: '#3c3c3c',
        textSecondary: '#666666',
        hoverColor: '#556b2f',
        borderColor: '#e6e6c9',
        shadowColor: 'rgba(107, 142, 35, 0.1)'
    }
}; 
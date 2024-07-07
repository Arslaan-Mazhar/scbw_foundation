export interface FooterIconsProps{
    href: string;
    key: string;
    icon: string;
    label: string;
}

export interface FooterIcons {
    title: string;
    links: FooterIconsProps[];
}
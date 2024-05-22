type IconProps = React.HTMLAttributes<SVGElement>;

export const Icons = {
    logo:(props:IconProps)=>(
        <svg
            xmlns = "http://www.w3.org/2000/svg"
            viewBox ="0 0 24 24"
            fill = "none"
            stroke = "currentColor"
            strokeWidth = "2"
            strokeLinecap = "round"
            strokeLinejoin="round"
            {...props}
            >
        <path d="M4 11a9 9 0 0 1 9 9" />
        <path d="M4 4a16 16 0 0 1 16 16" />
        <circle cx="5" cy="19" r="1" />
        </svg>
    ),
    twitter:(props:IconProps)=>(
        <svg
            xmlns = "http://www.w3.org/2000/svg"
            viewBox ="0 0 24 24"
            fill = "none"
            stroke = "currentColor"
            strokeWidth = "2"
            strokeLinecap = "round"
            strokeLinejoin="round"
            {...props}
            >
        <path d="M23 3a10 10 0 0 1-3 1 5 5 0 0 0 2-3 10 10 0 0 1-3 1 5 5 0 0 0-8 4 5 5 0 0 0 0 1 5 5 0 0 0 2 4 5 5 0 0 1-2 0 5 5 0 0 0 4 5 5 5 0 0 1-2 0 5 5 0 0 0 4 3 10 10 0 0 1-6 2 10 10 0 0 1-1 0 10 10 0 0 0 6 2 10 10 0 0 0 10-10 10 10 0 0 0 0-1 7 7 0 0 0 2-2" />
        </svg>
    ),
    github:(props:IconProps)=>(
        <svg
            xmlns = "http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill = "none"
            stroke = "currentColor"
            strokeWidth = "2"
            strokeLinecap = "round"
            strokeLinejoin="round"
            {...props}
            >
        <path d="M12 2C6.75 2 2 6.75 2 12c0 5.25 3.75 9.5 8 10.5c.75.25 1-.25 1-.75c0-.5 0-2 0-3.75c-3.25.75-4-1.5-4-1.5c-.5-1.25-1.25-1.5-1.25-1.5c-1-.75.25-.75.25-.75c1.25 0 2 .75 2 .75c1.25 2 3.25 1.5 4 1.25c0 .75 0 1.5 0 2.75c0 .5.25 1 1 1c5.25-1 8-5.25 8-10.5c0-5.25-4.75-10-10-10z" />
        </svg>
    ),
    
}
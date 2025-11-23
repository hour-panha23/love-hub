import React, { forwardRef } from "react";

export type SVGIconProps = React.SVGProps<SVGSVGElement> & {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
  className?: string;
};

export const iconify =
  (
    svgChildren: React.ReactNode
  ): React.ForwardRefRenderFunction<SVGSVGElement, SVGIconProps> =>
  (
    {
      size = 24,
      color = "currentColor",
      strokeWidth = 1.5,
      className = "",
      ...props
    }: SVGIconProps,
    ref: React.ForwardedRef<SVGSVGElement>
  ) => {
    return (
      <svg
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        width={size}
        height={size}
        className={className}
        {...props}
      >
        {svgChildren}
      </svg>
    );
  };

// ---- REGISTER YOUR ICONS HERE ---- //

const HomeIcon = forwardRef(
  iconify(
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m2.25 12 8.954-8.955c.44-.439 
         1.152-.439 1.591 0L21.75 12M4.5 
         9.75v10.125c0 .621.504 1.125 1.125 
         1.125H9.75v-4.875c0-.621.504-1.125 
         1.125-1.125h2.25c.621 0 1.125.504 
         1.125 1.125V21h4.125c.621 0 
         1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
    />
  )
);

const SearchIcon = forwardRef(
  iconify(
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21 21l-4.35-4.35M10.5 18A7.5 
         7.5 0 1 1 10.5 3a7.5 7.5 0 0 
         1 0 15z"
    />
  )
);

const HeartIcon = forwardRef(
  iconify(
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M20.84 4.61a5.5 5.5 
         0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 
         5.5 0 1 0-7.78 7.78L12 21.23l8.84-8.84a5.5 
         5.5 0 0 0 0-7.78z"
    />
  )
);

const StoryIcon = forwardRef(
  iconify(
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 6a9 9 0 0 0-6-2.25A9 9 0 0 0 3 
         3.75v14.25A9 9 0 0 1 6 18c2.3 0 4.4.87 
         6 2.3M12 6a9 9 0 0 1 6-2.25c1.05 0 
         2.05.18 3 .51v14.25A9 9 0 0 0 18 18a9 
         9 0 0 0-6 2.3M12 6v14.25"
    />
  )
);

const GalleryIcon = forwardRef(
  iconify(
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
    />
  )
);

const FunIcon = forwardRef(
  iconify(
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
    />
  )
);

const EventIcon = forwardRef(
  iconify(
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
    />
  )
);

const SettingIcon = forwardRef(
  iconify(
    <>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
      />
    </>
  )
);

export const icons = {
  home: HomeIcon,
  search: SearchIcon,
  heart: HeartIcon,
  story: StoryIcon,
  gallery: GalleryIcon,
  fun: FunIcon,
  event: EventIcon,
  setting: SettingIcon,
};

export type IconName = keyof typeof icons;

export const Icon = ({ name, ...props }: { name?: string } & SVGIconProps) => {
  const Component = name ? icons[name as keyof typeof icons] : undefined;
  if (!Component) return null;
  // forward the props down to the underlying svg component
  return <Component {...props} />;
};

export default HomeIcon;

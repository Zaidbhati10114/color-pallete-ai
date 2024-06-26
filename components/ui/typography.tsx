import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type ElementProps = {
  children?: ReactNode;
  className?: string;
};

declare type RFC<T = any> = React.FC<T & ElementProps>;

export const H1: RFC = ({ children, ...props }) => {
  return (
    <h1
      {...props}
      className={cn(
        "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
        props.className
      )}
    >
      {children}
    </h1>
  );
};
export const H2: RFC = ({ children, ...props }) => {
  return (
    <h2
      {...props}
      className={cn(
        "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0",
        props.className
      )}
    >
      {children}
    </h2>
  );
};
export const H3: RFC = ({ children, ...props }) => {
  return (
    <h3
      className={cn(
        "scroll-m-20 text-2xl font-semibold tracking-tight",
        props.className
      )}
      {...props}
    >
      {children}
    </h3>
  );
};
export const H4: RFC = ({ children, ...props }) => {
  return (
    <h4
      className={cn(
        "scroll-m-20 text-xl font-semibold tracking-tight",
        props.className
      )}
      {...props}
    >
      {children}
    </h4>
  );
};

export const P: RFC = ({ children, ...props }) => {
  return (
    <p
      {...props}
      className={cn("leading-7 [&:not(:first-child)]:mt-6", props.className)}
    >
      {children}
    </p>
  );
};
export const Span: RFC = ({ children, ...props }) => {
  return (
    <span
      className={cn("leading-7 [&:not(:first-child)]:mt-6", props.className)}
      {...props}
    >
      {children}
    </span>
  );
};

export const Blockquote: RFC = ({ children, ...props }) => {
  return (
    <blockquote
      className={cn("mt-6 border-l-2 pl-6 italic", props.className)}
      {...props}
    >
      {children}
    </blockquote>
  );
};
export const List: RFC = ({ children, ...props }) => {
  return (
    <ul
      className={cn("my-6 ml-6 list-disc [&>li]:mt-2", props.className)}
      {...props}
    >
      {children}
    </ul>
  );
};
export const ListItem: RFC = ({ children, ...props }) => {
  return <li {...props}>{children}</li>;
};
export const InlineCode: RFC = ({ children, ...props }) => {
  return (
    <code
      className={cn(
        "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold",
        props.className
      )}
      {...props}
    >
      {children}
    </code>
  );
};
export const Lead: RFC = ({ children, ...props }) => {
  return (
    <p className={cn("text-xl text-muted-foreground", props.className)}>
      {children}
    </p>
  );
};

import { cn } from "@/lib/utils"

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <>
    <div
      className={cn("animate-pulse rounded-md  bg-[#e0e0e0] dark:bg-[#f0f0f0]", className)}
      {...props}
    />
      <div
        className={cn("animate-pulse hidden md:block rounded-md bg-[#e0e0e0] dark:bg-[#f0f0f0] w-[110px]  h-[30px] rounded-full")}
        {...props}
      />
    </>
  )
}

export { Skeleton }

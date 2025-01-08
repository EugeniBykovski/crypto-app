import { FC, memo } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const NotFoundPage: FC = memo(() => {
  return (
    <section className="flex flex-col justify-center items-center gap-4 h-[70vh] md:w-[500px] text-zinc-700">
      <h1 className="text-4xl">404</h1>
      <p>We couldn&apos;t find the page you were looking for :(</p>
      <Button asChild variant="default">
        <Link href="/">Go Home</Link>
      </Button>
    </section>
  );
});

export default NotFoundPage;

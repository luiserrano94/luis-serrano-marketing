import { redirect } from "next/navigation";

// About now lives on the homepage; keep the old route as a redirect to the
// in-page anchor for backward compatibility.
export default function AboutRedirect({ params }: { params: { locale: string } }) {
  redirect(`/${params.locale}#about`);
}

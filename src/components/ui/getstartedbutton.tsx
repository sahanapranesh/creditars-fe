import Link from "next/link";

export default function GetStartedButton() {

  return (
    <Link href="/createaccount">
        <button type="button">
            Create Account
        </button>
    </Link>
  )
}

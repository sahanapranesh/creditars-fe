import Image from "next/image";
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import GetStartedButton from "@/components/ui/getstartedbutton";


export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <LandmarkIcon className="h-6 w-6" />
          <span className="sr-only">CredPilot Balance Sheet Analyzer</span>
        </Link>
      </header>
      <main className="flex-1">
        <section className="w-full pt-12 md:pt-24 lg:pt-32 border-y">
          <div className="px-4 md:px-6 space-y-10 xl:space-y-16">
          <img
              alt="Hero"
              className="mx-auto aspect-[3/1] overflow-hidden rounded-t-xl object-cover"
              height="300"
              src="/credpilot.jpg"
              width="1270"
            />
            <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
              <div>
                <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                  Analyze Your Company's Financial Health
                </h1>
              </div>
              <div className="flex flex-col items-start space-y-4">
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Gain insights into your company's financial performance with our powerful balance sheet analyzer.
                  Unlock the key metrics and ratios to make informed decisions.
                </p>
                <div className="space-x-4">
                  <Link
                    className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                    href="#"
                  >
                    <GetStartedButton/>
                  </Link>
                  <Link
                    className="inline-flex h-9 items-center justify-center rounded-md border border-gray-200 bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300 dark:border-gray-800"
                    href="#"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
            
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                  Key Features
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Unlock Powerful Insights</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Our balance sheet analyzer provides a comprehensive view of your company's financial health,
                  empowering you to make informed decisions.
                </p>
              </div>
            </div>
            <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Detailed Balance Sheet Analysis</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Gain a deep understanding of your company's assets, liabilities, and equity with our comprehensive
                  balance sheet analysis.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Powerful Financial Ratio Calculations</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Leverage our automated financial ratio calculations to assess your company's liquidity, solvency, and
                  profitability.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Intuitive Visualization and Reporting</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Visualize your company's financial data with clear and informative charts and reports, making it easy
                  to understand and share.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Secure and Confidential Data Management</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Rest assured that your company's financial data is kept secure and confidential within our platform.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Customizable Reporting and Alerts</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Tailor your reporting and set up alerts to stay informed about key changes in your company's financial
                  performance.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Seamless Integration with Accounting Systems</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Easily connect your existing accounting software to our platform for a streamlined financial analysis
                  experience.
                </p>
              </div>
            </div>
            <div className="flex justify-center flex-col sm:flex-row items-start gap-4">
            <Link href="/createaccount">
              <Button type="button">
                  Get Started
              </Button>
            </Link>
            <Link href="/upload">
              <Button type="button">
                  Try a quick demo
              </Button>
            </Link>
              <Link
                className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300 dark:border-gray-800"
                href="#"
              >
                Learn More
              </Link>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Unlock the Power of Financial Insights
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Gain a comprehensive understanding of your company's financial health and make informed decisions with
                our powerful balance sheet analyzer.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <form className="flex space-x-2">
                <Input className="max-w-lg flex-1" placeholder="Enter your email" type="email" />
                
                <GetStartedButton />
              </form>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Sign up to start analyzing your company's balance sheet.
                <Link className="underline underline-offset-2" href="#">
                  Terms & Conditions
                </Link>
              </p>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Balance Sheet Analyzer. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}


function LandmarkIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="3" x2="21" y1="22" y2="22" />
      <line x1="6" x2="6" y1="18" y2="11" />
      <line x1="10" x2="10" y1="18" y2="11" />
      <line x1="14" x2="14" y1="18" y2="11" />
      <line x1="18" x2="18" y1="18" y2="11" />
      <polygon points="12 2 20 7 4 7" />
    </svg>
  )
}

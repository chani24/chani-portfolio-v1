import SmoothScroll from "./_components/SmoothScroll"
import './globals.css'
import TopNav from './_components/TopNav/TopNav';
import Footer from './_components/Footer/Footer';
import LoadingScreen from "./_components/LoadingScreen/LoadingScreen";

export const metadata = {
  title: 'Chidera Ani - Frontend developer',
  description: 'Chidera Ani is a creative frontend developer skilled in crafting captivating web experiences. With a strong design sensibility and up-to-date tech knowledge, Chidera transforms concepts into user-friendly interfaces. Their expertise results in responsive, accessible websites, backed by collaborative teamwork.',
}




export default function RootLayout({
  children,
}: {
  children: React.ReactNode
  }) {

  return (
    <html lang="en">
      <body>
        <TopNav />
        <LoadingScreen />
      <SmoothScroll>
          
        {children}
        <Footer/>
        </SmoothScroll>
      </body>
    </html>
  )
}

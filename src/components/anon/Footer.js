import Link from "next/link"
import { Leaf, Twitter, Instagram, Linkedin } from 'lucide-react'

export function Footer() {
    return (
        <footer className="w-full bg-white py-8 border-t border-green-100 mt-20">
            <div className="container px-4 md:px-6 mx-auto">
                {/* Top section with logo and links */}
                <div className="grid grid-cols-1 gap-8 md:grid-cols-4 mb-8">
                    {/* Logo and tagline */}
                    <div className="md:col-span-1">
                        <Link href="/" className="flex items-center gap-2 font-bold text-xl text-green-600 mb-2">
                            <Leaf className="h-5 w-5" />
                            <span className="bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">
                                SmartFarm
                            </span>
                        </Link>
                        <p className="text-sm text-gray-500 max-w-xs">
                            Smart technology for sustainable agriculture and maximum efficiency.
                        </p>
                    </div>

                    {/* Quick links */}
                    <div>
                        <h3 className="font-medium text-gray-900 mb-3 text-sm">Products</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="#" className="text-sm text-gray-500 hover:text-green-600 transition-colors">
                                    Irrigation Systems
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-sm text-gray-500 hover:text-green-600 transition-colors">
                                    Crop Monitoring
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-sm text-gray-500 hover:text-green-600 transition-colors">
                                    Climate Control
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-medium text-gray-900 mb-3 text-sm">Company</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="#" className="text-sm text-gray-500 hover:text-green-600 transition-colors">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-sm text-gray-500 hover:text-green-600 transition-colors">
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-sm text-gray-500 hover:text-green-600 transition-colors">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-medium text-gray-900 mb-3 text-sm">Support</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="#" className="text-sm text-gray-500 hover:text-green-600 transition-colors">
                                    Help Center
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-sm text-gray-500 hover:text-green-600 transition-colors">
                                    Documentation
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="text-sm text-gray-500 hover:text-green-600 transition-colors">
                                    FAQ
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom section with copyright and social */}
                <div className="pt-4 border-t border-gray-100">
                    <div className="flex flex-col sm:flex-row justify-between items-center">
                        <p className="text-xs text-gray-500">
                            © {new Date().getFullYear()} SmartFarm. All rights reserved.
                        </p>

                        <div className="flex items-center mt-4 sm:mt-0">
                            <div className="flex gap-4 mr-6">
                                <Link href="#" className="text-xs text-gray-500 hover:text-green-600 transition-colors">
                                    Privacy
                                </Link>
                                <Link href="#" className="text-xs text-gray-500 hover:text-green-600 transition-colors">
                                    Terms
                                </Link>
                            </div>

                            <div className="flex gap-3">
                                <a
                                    href="#"
                                    className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-green-100 hover:text-green-600 transition-colors"
                                    aria-label="Twitter"
                                >
                                    <Twitter className="h-4 w-4" />
                                </a>
                                <a
                                    href="#"
                                    className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-green-100 hover:text-green-600 transition-colors"
                                    aria-label="Instagram"
                                >
                                    <Instagram className="h-4 w-4" />
                                </a>
                                <a
                                    href="#"
                                    className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-green-100 hover:text-green-600 transition-colors"
                                    aria-label="LinkedIn"
                                >
                                    <Linkedin className="h-4 w-4" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

import { FaTruck, FaRedo, FaLock, FaOpencart } from "react-icons/fa";
import { FaMoneyCheckDollar } from "react-icons/fa6";

export default function Footer() {
    return (
        <footer className="bg-black text-white">
            {/* Top Section */}
            <div className="container mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center border-b border-gray-700">
                <div className="flex flex-col items-center">
                    <FaTruck className="text-white text-3xl mb-2" />
                    <p>Free Shipping & Returns</p>
                </div>
                <div className="flex flex-col items-center">
                    <FaMoneyCheckDollar className="text-white text-3xl mb-2" />
                    <p>100% Money Back Guarantee</p>
                </div>
                <div className="flex flex-col items-center">
                    <FaRedo className="text-white text-3xl mb-2" />
                    <p>Replacement in case of defect</p>
                </div>
                <div className="flex flex-col items-center">
                    <FaLock className="text-white text-3xl mb-2" />
                    <p>Safe and Secure Checkout</p>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="container mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start lg:items-center">
                    <FaOpencart size={50} className="text-yellow-400 mr-3" />
                    <h2 className="text-white text-3xl font-bold">Cartify</h2>
                </div>

                <div className="flex flex-col">
                    <h3 className="font-semibold mb-3">Help & Information</h3>
                    <p>Help</p>
                    <p>Track order</p>
                    <p>Delivery & returns</p>
                </div>
                <div className="flex flex-col">
                    <h3 className="font-semibold mb-3">About Cartify</h3>
                    <p>About Us</p>
                    <p>Careers at Cartify</p>
                    <p>Investor site</p>
                </div>
                <div className="flex flex-col">
                    <h3 className="font-semibold mb-3">More from Cartify</h3>
                    <p>Mobile and Cartify apps</p>
                    <p>Gift vouchers</p>
                    <p>Black Friday</p>
                </div>
            </div>

            {/* Bottom Copyright */}
            <div className="border-t border-gray-700 text-center py-4 text-sm">
                <p>Copyright © 2024 Cartify. All Rights Reserved.</p>
                <div className="flex justify-center gap-4 mt-2">
                    <p>Privacy & Cookies</p>
                    <p>T&Cs</p>
                    <p>Accessibility</p>
                </div>
            </div>
        </footer>
    );
}

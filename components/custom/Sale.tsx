import Image from "next/image";

export default function Sale() {
    const productCategories = {
        flashSale: [
            {
                image: "/images/flashSale/Image.png",
                title: "Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear...",
                price: "$1,500",
            },
            {
                image: "/images/flashSale/Image2.png",
                title: "Samsung Electronics Samsung Galaxy S21 5G",
                price: "$1,500",
            },
            {
                image: "/images/flashSale/Image3.png",
                title: "Portable Wshing Machine, 11lbs capacity Model 18NMF...",
                price: "$1,500",
            },
        ],
        bestSellers: [
            {
                image: "/images/bestSellers/Image1.png",
                title: "Xbox Series S - 512GB SSD Console with Wireless Controller",
                price: "$442.12",
            },
            {
                image: "/images/bestSellers/Image2.png",
                title: "Sony WH-1000XM4 Wireless Noise Cancelling Headphones",
                price: "$348.00",
            },
            {
                image: "/images/bestSellers/Image3.png",
                title: "Samsung 55-Inch QLED 4K Smart TV",
                price: "$897.99",
            }
        ],
        topRated: [
            {
                image: "/images/topRated/Image1.png",
                title: "Canon EOS R6 Full-Frame Mirrorless Camera",
                price: "$2,499.00",
            },
            {
                image: "/images/topRated/Image2.png",
                title: "DJI Mavic Air 2 Drone with 4K Camera",
                price: "$799.00",
            },
            {
                image: "/images/topRated/Image3.png",
                title: "Bose SoundLink Revolve+ Portable Speaker",
                price: "$329.00",
            }
        ],
        newArrival: [
            {
                image: "/images/newArrival/Image1.png",
                title: "Google Pixel 8 Pro 5G Smartphone",
                price: "$999.00",
            },
            {
                image: "/images/newArrival/Image2.png",
                title: "Apple AirPods Pro (2nd Generation)",
                price: "$249.00",
            },
            {
                image: "/images/newArrival/Image3.png",
                title: "LG OLED C3 65-Inch 4K Smart TV",
                price: "$1,796.99",
            }
        ],
    }
    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
                {/* Flash Sale Section */}
                <div className="flex flex-col h-auto  p-4">
                    <h2 className="text-xl font-semibold mb-4">Flash Sale Today</h2>

                    <div className="flex flex-col gap-3">
                        {productCategories.flashSale.map((product, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-3 p-3 bg-white rounded-lg border hover:shadow-md transition-shadow cursor-pointer group"
                            >
                                <div
                                    className="flex-shrink-0 w-20 h-20 bg-gray-50 rounded-lg flex items-center justify-center overflow-hidden">
                                    <Image
                                        src={product.image || "/placeholder.svg"}
                                        alt={product.title}
                                        className="w-[80px] h-[80px] object-contain group-hover:scale-110 transition-transform"
                                        width={80}
                                        height={80}
                                    />
                                </div>

                                <div className="flex-1 min-w-0">
                                    <h4 className="text-sm font-medium line-clamp-2 mb-1 group-hover:text-[#0989FF] transition-colors">
                                        {product.title}
                                    </h4>
                                    <p className="text-[#0989FF] font-bold text-base">
                                        {product.price}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Example Other Grid Items */}
                <div className="flex flex-col h-auto  p-4">
                    <h2 className="text-xl font-semibold mb-4">Best Sellers</h2>
                    <div className="flex flex-col gap-3">
                        {productCategories.bestSellers.map((product, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-3 p-3 bg-white rounded-lg border hover:shadow-md transition-shadow cursor-pointer group"
                            >
                                <div
                                    className="flex-shrink-0 w-20 h-20 bg-gray-50 rounded-lg flex items-center justify-center overflow-hidden">
                                    <img
                                        src={product.image || "/placeholder.svg"}
                                        alt={product.title}
                                        className="w-full h-full object-contain group-hover:scale-110 transition-transform"
                                    />
                                </div>

                                <div className="flex-1 min-w-0">
                                    <h4 className="text-sm font-medium line-clamp-2 mb-1 group-hover:text-[#0989FF] transition-colors">
                                        {product.title}
                                    </h4>
                                    <p className="text-[#0989FF] font-bold text-base">
                                        {product.price}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex flex-col h-auto  p-4">
                    <h2 className="text-xl font-semibold mb-4">Top Rated</h2>
                    <div className="flex flex-col gap-3">
                        {productCategories.topRated.map((product, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-3 p-3 bg-white rounded-lg border hover:shadow-md transition-shadow cursor-pointer group"
                            >
                                <div
                                    className="flex-shrink-0 w-20 h-20 bg-gray-50 rounded-lg flex items-center justify-center overflow-hidden">
                                    <Image
                                        src={product.image || "/placeholder.svg"}
                                        alt={product.title}
                                        className="w-[80px] h-[80px] object-contain group-hover:scale-110 transition-transform"
                                        width={80}
                                        height={80}
                                    />
                                </div>

                                <div className="flex-1 min-w-0">
                                    <h4 className="text-sm font-medium line-clamp-2 mb-1 group-hover:text-[#0989FF] transition-colors">
                                        {product.title}
                                    </h4>
                                    <p className="text-[#0989FF] font-bold text-base">
                                        {product.price}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex flex-col h-auto  p-4">
                    <h2 className="text-xl font-semibold mb-4">New Arrival</h2>
                    <div className="flex flex-col gap-3">
                        {productCategories. newArrival.map((product, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-3 p-3 bg-white rounded-lg border hover:shadow-md transition-shadow cursor-pointer group"
                            >
                                <div
                                    className="flex-shrink-0 w-20 h-20 bg-gray-50 rounded-lg flex items-center justify-center overflow-hidden">
                                    <Image
                                        src={product.image || "/placeholder.svg"}
                                        alt={product.title}
                                        className="w-[80px] h-[80px] object-contain group-hover:scale-110 transition-transform"
                                        width={80}
                                        height={80}
                                    />
                                </div>

                                <div className="flex-1 min-w-0">
                                    <h4 className="text-sm font-medium line-clamp-2 mb-1 group-hover:text-[#0989FF] transition-colors">
                                        {product.title}
                                    </h4>
                                    <p className="text-[#0989FF] font-bold text-base">
                                        {product.price}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>


            {/*<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4 p-4">*/}
            {/*    <div className=" flex items-center justify-center h-24">*/}
            {/*        <h2>Flash Sale Today</h2>*/}
            {/*        <div className="flex flex-col gap-3">*/}
            {/*            {productCategories.flashSale.map((product, index) => (*/}
            {/*                <div*/}
            {/*                    key={index}*/}
            {/*                    className="flex items-center gap-3 p-3 bg-white rounded-lg border hover:shadow-md transition-shadow cursor-pointer group"*/}
            {/*                >*/}
            {/*                    <div*/}
            {/*                        className="flex-shrink-0 w-20 h-20 bg-gray-50 rounded-lg flex items-center justify-center overflow-hidden">*/}
            {/*                        <img*/}
            {/*                            src={product.image || "/placeholder.svg"}*/}
            {/*                            alt={product.title}*/}
            {/*                            className="w-full h-full object-contain group-hover:scale-110 transition-transform"*/}
            {/*                        />*/}
            {/*                    </div>*/}
            {/*                    <div className="flex-1 min-w-0">*/}
            {/*                        <h4 className="text-sm font-medium line-clamp-2 mb-1 group-hover:text-[#0989FF] transition-colors">*/}
            {/*                            {product.title}*/}
            {/*                        </h4>*/}
            {/*                        <p className="text-[#0989FF] font-bold text-base">{product.price}</p>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*            ))}*/}
            {/*        </div>*/}

            {/*    </div>*/}
            {/*    <div className="  flex items-center justify-center h-24">*/}
            {/*        <h2>Best Sellers</h2>*/}
            {/*    </div>*/}
            {/*    <div className="  flex items-center justify-center h-24">*/}
            {/*        <h2>Top Rated</h2>*/}
            {/*    </div>*/}
            {/*    <div className="  flex items-center justify-center h-24">*/}
            {/*        <h2>New Arrival</h2>*/}
            {/*    </div>*/}
            {/*</div>*/}

        </>

    )
}
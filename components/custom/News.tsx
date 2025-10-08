import {
    ArrowRight,
    User,
    Calendar,
    MessageSquare,
} from "lucide-react"

import Image from "next/image"

export default function News() {
    return (
        <div className="mb-12 bg-[#F2F4F5] py-10">
            <div className="container h-full w-full mx-auto">
                <h2 className="text-2xl font-bold text-center mb-8">Latest News</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {/* Blog Card 1 */}
                    <div
                        className="sm:w-[424px] h-fit bg-card text-card-foreground flex flex-col gap-3 rounded-xl border py-3 shadow-sm overflow-hidden hover:shadow-lg transition-shadow">
                        <div className="flex justify-center align-center">
                            <Image
                                src="/images/news/news1.png"
                                alt="Smartwatch on keyboard"
                                className="w-[360px] h-[248px] object-cover "
                                width={360}
                                height={248}
                            />
                        </div>
                        <div className="p-5">
                            <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                                <div className="flex items-center gap-1">
                                    <User className="h-3.5 w-3.5"/>
                                    <span>Kristin</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <Calendar className="h-3.5 w-3.5"/>
                                    <span>19 Dec, 2013</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <MessageSquare className="h-3.5 w-3.5"/>
                                    <span>453</span>
                                </div>
                            </div>
                            <h3 className="font-semibold text-base mb-2 line-clamp-2">
                                Cras nisl dolor, accumsan et metus sit amet, vulputate condimentum dolor.
                            </h3>
                            <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                                Maecenas scelerisque, arcu quis tempus egestas, ligula diam molestie lectus, tincidunt
                                mattis arcu
                                metus placerat metus.
                            </p>
                            <a
                                href="#"
                                className="text-[#FF8A00] text-sm font-semibold flex items-center gap-1 hover:gap-2 transition-all"
                            >
                                READ MORE
                                <ArrowRight className="h-4 w-4"/>
                            </a>
                        </div>
                    </div>

                    {/* Blog Card 2 */}
                    <div
                        className="sm:w-[424px] h-fit bg-card text-card-foreground flex flex-col gap-3 rounded-xl border py-3 shadow-sm overflow-hidden hover:shadow-lg transition-shadow">
                        <div className="flex justify-center align-center">
                            <Image
                                src="/images/news/news2.png"
                                alt="Computer circuit board"
                                className="w-[360px] h-[248px] object-cover p-5"
                                width={360}
                                height={248}
                            />
                        </div>
                        <div className="p-5">
                            <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                                <div className="flex items-center gap-1">
                                    <User className="h-3.5 w-3.5"/>
                                    <span>Robert</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <Calendar className="h-3.5 w-3.5"/>
                                    <span>28 Nov, 2013</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <MessageSquare className="h-3.5 w-3.5"/>
                                    <span>738</span>
                                </div>
                            </div>
                            <h3 className="font-semibold text-base mb-2 line-clamp-2">
                                Curabitur pulvinar aliquam lectus, non blandit erat mattis vitae.
                            </h3>
                            <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                                Mauris scelerisque odio id rutrum volutpat. Pellentesque urna odio, vulputate at tortor
                                vitae,
                                hendrerit blandit orci.
                            </p>
                            <a
                                href="#"
                                className="text-[#FF8A00] text-sm font-semibold flex items-center gap-1 hover:gap-2 transition-all"
                            >
                                READ MORE
                                <ArrowRight className="h-4 w-4"/>
                            </a>
                        </div>
                    </div>

                    {/* Blog Card 3 */}
                    <div
                        className="sm:w-[424px] h-fit bg-card text-card-foreground flex flex-col gap-3 rounded-xl border py-3 shadow-sm overflow-hidden hover:shadow-lg transition-shadow">
                        <div className="flex justify-center align-center">
                            <Image
                                src="/images/news/news3.png"
                                alt="Smartphone on desk"
                                className="w-[360px] h-[248px] object-cover p-5"
                                width={360}
                                height={248}
                            />
                        </div>
                        <div className="p-5">
                            <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                                <div className="flex items-center gap-1">
                                    <User className="h-3.5 w-3.5"/>
                                    <span>Arlene</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <Calendar className="h-3.5 w-3.5"/>
                                    <span>28 Nov, 2013</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <MessageSquare className="h-3.5 w-3.5"/>
                                    <span>826</span>
                                </div>
                            </div>
                            <h3 className="font-semibold text-base mb-2 line-clamp-2">
                                Curabitur massa erat, consectetur et blandit ac, auctor et tellus.
                            </h3>
                            <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                                Pellentesque vestibulum lorem vel gravida aliquam. Morbi porta, odio id suscipit mattis,
                                risus augue condimentum
                            </p>
                            <a
                                href="#"
                                className="text-[#FF8A00] text-sm font-semibold flex items-center gap-1 hover:gap-2 transition-all"
                            >
                                READ MORE
                                <ArrowRight className="h-4 w-4"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
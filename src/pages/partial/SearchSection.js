import { Link } from "react-router-dom";

function SearchSection() {
    return (
        <section className="sticky top-0 z-50 px-2 py-3 bg-white sm:px-4">
            <Link to="/" className="flex items-center w-full h-10 gap-4 px-4 bg-gray-100 rounded">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.2508 10.1238C18.2508 11.9165 17.6687 13.5725 16.6882 14.9161L21.6338 19.8646C22.1221 20.3528 22.1221 21.1456 21.6338 21.6338C21.1455 22.1221 20.3525 22.1221 19.8642 21.6338L14.9186 16.6853C13.5748 17.6696 11.9185 18.2476 10.1254 18.2476C5.6369 18.2476 2 14.6114 2 10.1238C2 5.63619 5.6369 2 10.1254 2C14.6139 2 18.2508 5.63619 18.2508 10.1238ZM10.1254 15.748C10.8641 15.748 11.5956 15.6025 12.2781 15.3199C12.9606 15.0372 13.5807 14.623 14.1031 14.1007C14.6254 13.5784 15.0398 12.9584 15.3225 12.2761C15.6052 11.5937 15.7507 10.8624 15.7507 10.1238C15.7507 9.38523 15.6052 8.65389 15.3225 7.97153C15.0398 7.28917 14.6254 6.66917 14.1031 6.14692C13.5807 5.62466 12.9606 5.21039 12.2781 4.92775C11.5956 4.64511 10.8641 4.49963 10.1254 4.49963C9.38668 4.49963 8.65519 4.64511 7.9727 4.92775C7.29021 5.21039 6.67008 5.62466 6.14773 6.14692C5.62537 6.66917 5.21102 7.28917 4.92832 7.97153C4.64562 8.65389 4.50012 9.38523 4.50012 10.1238C4.50012 10.8624 4.64562 11.5937 4.92832 12.2761C5.21102 12.9584 5.62537 13.5784 6.14773 14.1007C6.67008 14.623 7.29021 15.0372 7.9727 15.3199C8.65519 15.6025 9.38668 15.748 10.1254 15.748Z" fill="currentColor"></path></svg>
                <div className="type-writer-effect">
                    <div className="overflow-hidden text-sm font-semibold border-r-2 whitespace-nowrap">Search Medicine</div>
                </div>
            </Link>
        </section>
    );
}

export default SearchSection;
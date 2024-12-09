import Image from 'next/image'
import { SignIn, SignInButton, useUser } from '@clerk/nextjs';

export function MobileHeader() {
    const { user } = useUser();

    return (
<div className="flex w-full">
    <div className="flex flex-col gap-2 w-full">
        {/* Logged In and loggged out render differently */}
        {user?.id ?(
            <div className="flex flex-row items-center gap-2 w-full">
                <div className="bg-[#ede8e4] p-2 rounded-full">
                    <svg width="17" height="19" viewBox="0 0 17 19" fill="#6b5d51">
                        <path d="M8.875 0.8125C9.08594 0.8125 9.22656 0.742188 9.40234 0.601562C9.64844 0.460938 9.92969 0.25 10.5625 0.25C11.793 0.25 12.6016 2.32422 13.0938 4.15234C12.1094 4.46875 10.7383 4.75 8.875 4.75C7.01172 4.75 5.60547 4.46875 4.65625 4.15234C5.11328 2.32422 5.92188 0.25 7.1875 0.25C7.82031 0.25 8.06641 0.460938 8.3125 0.601562C8.48828 0.742188 8.62891 0.8125 8.875 0.8125ZM1.28125 3.69531C1.52734 3.58984 1.84375 3.66016 1.98438 3.87109C2.19531 4.11719 2.79297 4.64453 3.91797 5.10156C5.04297 5.52344 6.66016 5.875 8.875 5.875C11.0547 5.875 12.6719 5.52344 13.7969 5.10156C14.9219 4.64453 15.5195 4.11719 15.7305 3.87109C15.8711 3.66016 16.1875 3.58984 16.4336 3.69531C16.6797 3.83594 16.7852 4.11719 16.7148 4.36328C16.3633 5.34766 15.4844 6.57812 14.1484 7.52734C13.9023 7.73828 13.6562 7.87891 13.375 8.05469C13.375 8.08984 13.375 8.125 13.375 8.125C13.375 10.6211 11.3359 12.625 8.875 12.625C6.37891 12.625 4.375 10.6211 4.375 8.125C4.375 8.125 4.375 8.08984 4.375 8.05469C4.09375 7.91406 3.8125 7.73828 3.56641 7.52734C2.23047 6.57812 1.35156 5.34766 1 4.39844C0.929688 4.11719 1.03516 3.83594 1.28125 3.69531ZM4.51562 13.75H13.1992C14.8867 13.75 16.3281 15.0508 16.5391 16.7383L16.5742 16.9844C16.6797 17.6875 16.1523 18.25 15.4492 18.25H2.26562C1.59766 18.25 1.07031 17.6875 1.14062 16.9844L1.17578 16.7383C1.38672 15.0508 2.82812 13.75 4.51562 13.75Z">
                        </path>
                    </svg>
                </div> 
                    <p className="font-archia font-semibold text-primary whitespace-nowrap text-sm max-w-[80%] overflow-hidden overflow-ellipsis">
                    Hi, {user.firstName}
                </p> 
            </div>
        ):(        
        <div className="flex flex-row items-center gap-2 justify-between">                 
            <Image src="/images/logo_small.svg"
                width={24}
                height={24}
                alt="Logo" />
            <div className="flex flex-col float-right justify end">
                <SignInButton>
                    <a className="font-semibold text-sm sm:text-base rounded-md py-2 px-3 text-primary border border-lightGrey" href="/login">
                        Log in
                    </a>
                </SignInButton>

            </div>
        </div>
        )}
    </div>
</div>
)}
import React from 'react';
import Link from "next/link";

function Goodbye() {
    return (
        <div className="text-sm font-light tracking-tight text-black dark:text-white justify-center text-center mt-10">
            <p className="scroll-m-20">
                Work in Progress. Contribute{' '}
                <Link href="https://github.com/3nityR/renaissancelanding" className="text-blue-500 hover:underline">
                    here
                </Link>
            </p>
        </div>
    );
}


export default Goodbye;

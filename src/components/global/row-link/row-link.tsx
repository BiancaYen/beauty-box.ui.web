import Link from 'next/link';
import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';

// Types
interface RowLinkProps {
    copy: string,
    link: string,
}

export const RowLink = ({
    copy,
    link,
}: RowLinkProps) => (
    <Link
        className="flex w-full items-center justify-between border-b-[1px] border-system-default-tint-2 bg-default-white px-2 py-4 text-system-default-default transition-all hover:bg-primary-tint-2 hover:text-primary-default"
        href={link}
    >
        {copy}
        <IoIosArrowForward />
    </Link>
);

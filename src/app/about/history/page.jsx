import Link from 'next/link';
import React from 'react';

const page = () => {
      return (
            <div>
                  <h1>history page</h1>
                  <Link href={"/about/history/vision"}>vision</Link>
            </div>
      );
};

export default page;
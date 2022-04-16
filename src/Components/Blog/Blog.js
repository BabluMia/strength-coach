import React from 'react';
import { Accordion } from 'react-bootstrap';
import './Blog.css'

const Blog = () => {
    return (
        <div className='min-h blog mt-5 mb-5'>
            <span className='text-white my-5'>.</span>
            <h2 className='text-center my-5'>We Are Here To Answere</h2>
            <div className="row  ms-0  mt-5 mt-md-0 px-2 mb-5">
                <div className="col-11 col-lg-8  w-lg-75 mx-auto">
                    <Accordion>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Authentication vs. Authorization</Accordion.Header>
                            <Accordion.Body>
                                <p>
                                    Context API রিয়েক্টের একটি গুরুত্বপূর্ণ বিষয়।
                                    আমরা একটি ওয়েব সাইটের অনেক যায়গায় অনেক বাটন ব্যবহার করে থাকি এগুলোর টেক্সট হয়তো আলাদা তাকে বাট কাজ অনেকটা এক।  এই কাজ গুলো যদি শেয়ারে করা যেতো তাহলে আমদের কোড রিপিট হতো না। আর এই রিপিটেশন কমাতে আমরা Context API ব্যবহার করতে থাকি।   Context API আমাদের কাজ সহজ করে দেয়। আমাদের কোড কমিয়ে দেয় শেয়ারের মাধ্যমে
                                    এই ক্ষেত্রে Context Create করে যেকোনো যায়গায় ব্যবহার করা যায় কোনো প্রপস ডিলিং ছাড়াই।
                                </p>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Why we use Firebase?</Accordion.Header>
                            <Accordion.Body>
                                <p className='my-2'>
                                    Semantic  হলো html5 এর উপাদান  যা সব ধরনের ব্রাউজার সাপোর্ট করে। একটি ওয়েব পেজ কে বর্তমানে ৫ টি ভাগে ভাগ করা হয় যা Semantic element  যেমন - Header,Nav,Section,Article, Aside,Footer, ডকুমেন্ট কন্টেন্ট সহজ ও বোধগম্য কারার জন্য এগুলো ব্যবহার করা হয়

                                    যাতে করে Header, Nav, Footer দেখা মাত্রই বুঝা যার কোনটির অবস্থান কোথায়
                                </p>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>What other service Firebase provide us?</Accordion.Header>
                            <Accordion.Body>
                                <p className='my-2'>
                                    Inline : কন্টেন্ট এর সাইজ অনুযায়ী আচরন করে থাকে।  আমি যদি একটা Div এ  Width,Height সেট ও করে দেই আর তার কন্টেন্ট যদি কম হয় তাহলে কন্টেন্টের সাইজ ই এপ্লাই হবে।
                                </p>
                                <p className='my-2'>
                                    Block : কোনো div বা  tag  কে display:block ; করে দেয়া হয় তাহলে তার সাইজ যাই থাকুক না কেনো সে তার ফুল width দখল  করে নিবে।
                                </p>
                                <p className='my-2'>
                                    inline-block: এটি নতুন কোনো লাইন শুরু করে না block element এর মতো। এখানে hight, width সেট করে দেয়া যায়।
                                </p>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
            </div>
        </div>
    );
};

export default Blog;
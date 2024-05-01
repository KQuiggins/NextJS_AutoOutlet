export { default } from 'next-auth/middleware';

export const config = {
    matcher: ['/parts/add_part', '/profile', '/parts/saved', '/messages']
};
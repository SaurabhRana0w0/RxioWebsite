import { Link } from 'react-router-dom';
import React from 'react';
import { Button, buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { MenuToggleIcon } from '@/components/ui/menu-toggle-icon';
import { useScroll } from '@/components/ui/use-scroll';

export function Header() {
	const [open, setOpen] = React.useState(false);
	const scrolled = useScroll(10);

	const links = [
		{
			label: 'Home',
			href: '/',
		},
		{
			label: 'Why Rxio',
			href: '/why-rxio',
		},
		{
			label: 'Products',
			href: '/products',
		},
		{
			label: 'Pricing',
			href: '/pricing',
		},
		{
			label: 'Compare',
			href: '/compare',
		},
		{
			label: 'About',
			href: '/about',
		},
		{
			label: 'Contact',
			href: '/contact',
		},
		{
			label: 'Download',
			href: '/download',
		},
	];

	React.useEffect(() => {
		if (open) {
			// Disable scroll
			document.body.style.overflow = 'hidden';
		} else {
			// Re-enable scroll
			document.body.style.overflow = '';
		}

		// Cleanup when component unmounts
		return () => {
			document.body.style.overflow = '';
		};
	}, [open]);

	return (
		<header
			className={cn(
				'sticky top-0 z-50 mx-auto w-full transition-all duration-300 ease-in-out',
				scrolled ? 'md:top-4' : 'md:top-0'
			)}
		>
			<div className="container-section">
				<div className="flex h-14 items-center justify-between md:h-20">
					{/* Logo */}
					<div className="flex-shrink-0">
						<Link to="/" className="flex items-center">
							<img src="/logo.svg" alt="Rxio Logo" className="h-8 w-auto md:h-10" />
						</Link>
					</div>

					{/* Navigation Links - Pill on scroll */}
					<nav
						className={cn(
							'hidden md:flex items-center transition-all duration-300 ease-out',
							{
								'bg-background/95 supports-[backdrop-filter]:bg-background/50 border-border border backdrop-blur-lg rounded-full px-6 py-2 shadow-lg':
									scrolled && !open,
								'gap-2': !scrolled,
							},
						)}
					>
						{links.map((link, i) => (
							<Link
								key={i}
								className={buttonVariants({
									variant: 'ghost',
									className: cn(
										'text-sm font-medium transition-colors rounded-full',
										scrolled ? 'hover:bg-accent/50' : ''
									)
								})}
								to={link.href}
							>
								{link.label}
							</Link>
						))}
					</nav>

					{/* CTA Button & Mobile Menu */}
					<div className="flex items-center gap-4">
						<Button asChild className="hidden md:flex">
							<Link to="/download">Download Now</Link>
						</Button>
						<Button size="icon" variant="outline" onClick={() => setOpen(!open)} className="md:hidden">
							<MenuToggleIcon open={open} className="size-5" duration={300} />
						</Button>
					</div>
				</div>
			</div>

			{/* Mobile Menu */}
			<div
				className={cn(
					'bg-background/95 backdrop-blur-lg fixed top-14 right-0 bottom-0 left-0 z-50 flex flex-col overflow-hidden border-y md:hidden transition-all duration-300',
					open ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none',
				)}
			>
				<div
					className="flex h-full w-full flex-col justify-between gap-y-2 p-6"
				>
					<div className="grid gap-y-2">
						{links.map((link) => (
							<Link
								key={link.label}
								className={buttonVariants({
									variant: 'ghost',
									className: 'justify-start text-lg h-12 rounded-xl',
								})}
								to={link.href}
								onClick={() => setOpen(false)}
							>
								{link.label}
							</Link>
						))}
					</div>
					<div className="flex flex-col gap-2 pb-10">
						<Button asChild className="w-full" size="lg">
							<Link to="/download" onClick={() => setOpen(false)}>Download Now</Link>
						</Button>
					</div>
				</div>
			</div>
		</header>
	);
}

export const WordmarkIcon = (props: React.ComponentProps<"svg">) => (
	<svg viewBox="0 0 84 24" fill="currentColor" {...props}>
		<path d="M45.035 23.984c-1.34-.062-2.566-.441-3.777-1.16-1.938-1.152-3.465-3.187-4.02-5.36-.199-.784-.238-1.128-.234-2.058 0-.691.008-.87.062-1.207.23-1.5.852-2.883 1.852-4.144.297-.371 1.023-1.09 1.41-1.387 1.399-1.082 2.84-1.68 4.406-1.816.536-.047 1.528-.02 2.047.054 1.227.184 2.227.543 3.106 1.121 1.277.84 2.5 2.184 3.367 3.7.098.168.172.308.172.312-.004 0-1.047.723-2.32 1.598l-2.711 1.867c-.61.422-2.91 2.008-2.993 2.062l-.074.047-1-1.574c-.55-.867-1.008-1.594-1.012-1.61-.007-.019.922-.648 2.188-1.476 1.215-.793 2.2-1.453 2.191-1.46-.02-.032-.508-.27-.691-.34a5 5 0 0 0-.465-.13c-.371-.09-1.105-.125-1.426-.07-1.285.219-2.336 1.3-2.777 2.852-.215.761-.242 1.636-.074 2.355.129.527.383 1.102.691 1.543.234.332.727.82 1.047 1.031.664.434 1.195.586 1.969.555.613-.023 1.027-.129 1.64-.426 1.184-.574 2.16-1.554 2.828-2.843.122-.235.208-.372.227-.368.082.032 3.77 1.938 3.79 1.961.034.032-.407.93-.696 1.414a12 12 0 0 1-1.051 1.477c-.36.422-1.102 1.14-1.492 1.445a9.9 9.9 0 0 1-3.23 1.684 9.2 9.2 0 0 1-2.95.351M74.441 23.996c-1.488-.043-2.8-.363-4.066-.992-1.687-.848-2.992-2.14-3.793-3.774-.605-1.234-.863-2.402-.863-3.894.004-1.149.176-2.156.527-3.11.14-.378.531-1.171.75-1.515 1.078-1.703 2.758-2.934 4.805-3.524.847-.242 1.465-.332 2.433-.351 1.032-.024 1.743.055 2.48.277l.31.09.007 2.48c.004 1.364 0 2.481-.008 2.481a1 1 0 0 1-.12-.055c-.688-.347-2.09-.488-2.962-.296-.754.167-1.296.453-1.785.945a3.7 3.7 0 0 0-1.043 2.11c-.047.382-.02 1.109.055 1.437a3.4 3.4 0 0 0 .941 1.738c.75.75 1.715 1.102 2.875 1.05.645-.03 1.118-.14 1.563-.366q1.721-.864 2.02-3.145c.035-.293.042-1.266.042-7.957V0H84l-.012 8.434c-.008 7.851-.011 8.457-.054 8.757-.196 1.274-.586 2.25-1.301 3.243-1.293 1.808-3.555 3.07-6.145 3.437-.664.098-1.43.14-2.047.125M9.848 23.574a14 14 0 0 1-1.137-.152c-2.352-.426-4.555-1.781-6.117-3.774-.27-.335-.75-1.05-.95-1.406-1.156-2.047-1.695-4.27-1.64-6.77.047-1.995.43-3.66 1.23-5.316.524-1.086 1.04-1.87 1.793-2.715C4.567 1.72 6.652.535 8.793.171 9.68.02 10.093 0 12.297 0" />
	</svg>
);

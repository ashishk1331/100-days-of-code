export default function (props) {
	return (
		<>
			{/* FAQ */}
			<div className="max-w-[85rem] min-h-screen px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto flex">
				{/* Grid */}
				<div className="grid md:grid-cols-5 gap-10 md:gap-16 m-auto">
					<div className="md:col-span-2">
						<div className="max-w-xl">
							<h2 className="text-2xl  md:text-4xl md:leading-tight">
								Timeline of <mark>upcoming events</mark>
							</h2>
							<p className="mt-1 hidden md:block text-gray-600">
								This is an approximation of the timeline for all
								the changes that will be done to the proxy club
								and whta all proxy club has to offer.
							</p>
						</div>
					</div>
					{/* End Col */}
					<div className="md:col-span-3">
						{/* Accordion */}
						<ol className="relative border-s text-gray-600">
							<Timestop
								time="March 2024"
								title="Soft Launch of Proxy Club"
								description={
									<span>
										The proxy club will get the head start
										with the revamped{" "}
										<mark>#100daysofcodechallenge</mark>.
									</span>
								}
							/>
							<Timestop
								time="February 2024"
								title="Beta Launch of Proxy Club"
								description="The beta launch will be open to the first 100 users who sign up for the waiting list."
							/>
							<Timestop
								time="April 2022"
								title="E-Commerce UI code in Tailwind CSS"
								description="Get started with dozens of web components and interactive elements built on top of Tailwind CSS."
							/>
						</ol>
						{/* End Accordion */}
					</div>
					{/* End Col */}
				</div>
				{/* End Grid */}
			</div>
			{/* End FAQ */}
		</>
	);
}

function Timestop(props) {
	const { time, title, description } = props;
	return (
		<li className="mb-10 ms-4">
			<div className="absolute w-3 h-3 bg-gray-300 rounded-full mt-1.5 -start-1.5 border border-white" />
			<time className="mb-1 text-sm font-normal leading-none text-gray-600">
				{time}
			</time>
			<h3 className="text-lg font-semibold text-gray-900 ">{title}</h3>
			{description ? (
				<p className="mb-4 text-base font-normal text-gray-600">
					{description}
				</p>
			) : (
				<>{props.children}</>
			)}
		</li>
	);
}

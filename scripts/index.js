gsap.registerPlugin(ScrollTrigger);

// Create Navigation
$("nav").append(`
<ul>
	<li class="to-projects"><a href="#">My Projects</a></li>
	<li class="to-about"><a href="#">About Me</a></li>
	<li class="to-contact"><a href="#">Say Hi!</a></li>
	<li>
		<button
			title="Download Resume"
			onclick="location.href='https://drive.google.com/uc?export=download&id=1ITjuDbBKSQA4N25vF8HNxWxBMT3ct68c';"
		>
			<img
				src="./img/download.svg"
				alt="Download Resume"
			/>
		</button>
	</li>
</ul>
`);

// Wrap elements
$(".wrapped").each((i, el) => {
    $(el).removeClass("wrapped");
    $(el).wrap("<div class='wrapped'></div>");
});

// Floating Navigation bar
const navFloatAnimation = gsap.from(".bottom-nav", {
    paused: true,
    duration: 0.4,
    ease: "power3.out",
    y: 400,
    scale: 0.9,
});
ScrollTrigger.create({
    start: "100px top",
    end: 99999,

    onLeaveBack: () => {
        navFloatAnimation.reverse();
    },
    onUpdate: (self) => {
        self.direction === -1
            ? navFloatAnimation.play()
            : navFloatAnimation.reverse();
    },
});

// Header Timeline
const headerTL = gsap.timeline();
headerTL
    .from($(".header").find(".greeting"), {
        duration: 0.8,
        yPercent: 100,
        ease: "expo.out",
    })
    .from(
        $(".header").find(".name"),
        { duration: 0.8, yPercent: 120, ease: "expo.out" },
        "-=0.6"
    )
    .from(
        $(".header").find(".intro"),
        { duration: 0.8, autoAlpha: 0, yPercent: 60, ease: "expo.out" },
        "-=0.4"
    )
    .from(
        $(".top-nav"),
        { duration: 1, autoAlpha: 0, yPercent: 10, ease: "expo.out" },
        "-=0.6"
    );

// Navigation

const controller = new ScrollMagic.Controller();

new ScrollMagic.Scene({
    triggerElement: "section.about",
    duration: $("section.about").height(),
})
    .setClassToggle(".to-about", "active")
    .addTo(controller);

new ScrollMagic.Scene({
    triggerElement: "section.footer",
    duration: $("section.footer").height(),
})
    .setClassToggle(".to-contact", "active")
    .addTo(controller);

$(".to-projects").on("click", (e) => {
    e.preventDefault();
    $("section.projects")[0].scrollIntoView();
    $(this).addClass("active");
});

$(".to-about").on("click", (e) => {
    e.preventDefault();
    $("section.about")[0].scrollIntoView();
    $(this).addClass("active");
});

$(".to-contact").on("click", (e) => {
    e.preventDefault();
    $("section.footer")[0].scrollIntoView();
    $(this).addClass("active");
});

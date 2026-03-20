import re

# Read the file
with open('/Users/spadecreative/CascadeProjects/Windsurf-Projects/the-faithful-mindset/src/data/blogPosts.ts', 'r') as f:
    content = f.read()

# Mapping of slugs to new unique images
image_mapping = {
    'neuroscience-of-prayer': '/assets/blog-images/prayer-meditation.jpg',
    'gratitude-rewires-brain': '/assets/blog-images/gratitude-journal.jpg',
    'renewing-mind-neuroplasticity': '/assets/blog-images/brain-neuroscience.jpg',
    'worship-changes-brain-chemistry': '/assets/blog-images/worship-silhouette.jpg',
    'psychology-of-hope': '/assets/blog-images/hope-light.jpg',
    'meditation-vs-prayer-brain-scans': '/assets/blog-images/meditation-calm.jpg',
    'amygdala-anxiety-scripture': '/assets/blog-images/scripture-bible.jpg',
    'memory-and-faith': '/assets/blog-images/hands-praying.jpg',
    'default-mode-network-god': '/assets/blog-images/neuroscience-lab.jpg',
    'dopamine-devotion': '/assets/blog-images/brain-scan.jpg',
    'theology-of-creativity': '/assets/blog-images/art-canvas.jpg',
    'god-cares-creative-projects': '/assets/blog-images/artist-studio.jpg',
    'spiritual-practice-of-making': '/assets/blog-images/pottery-wheel.jpg',
    'finding-god-creative-process': '/assets/blog-images/creative-process.jpg',
    'sabbath-rest-creativity-needs': '/assets/blog-images/sunset-colors.jpg',
    'creative-blocks-spiritual-invitations': '/assets/blog-images/design-sketch.jpg',
    'art-of-noticing': '/assets/blog-images/mindfulness-moment.jpg',
    'color-theory-kingdom': '/assets/blog-images/colorful-palette.jpg',
    'creative-rhythm-work-rest': '/assets/blog-images/craft-hands.jpg',
    'making-space-minimalism-creativity': '/assets/blog-images/minimalism-space.jpg',
    'psychology-small-beginnings': '/assets/blog-images/goal-planning.jpg',
    'decision-fatigue-spiritual-life': '/assets/blog-images/decision-making.jpg',
    'power-morning-rituals': '/assets/blog-images/morning-routine.jpg',
    'environment-shapes-faith': '/assets/blog-images/workspace-clean.jpg',
    'habit-loop-spiritual-disciplines': '/assets/blog-images/habits-routine.jpg',
    'attention-spiritual-practice': '/assets/blog-images/flower-bloom.jpg',
    'psychology-of-contentment': '/assets/blog-images/calm-lake.jpg',
    'emotional-regulation-scripture': '/assets/blog-images/journaling-writing.jpg',
    'comparison-trap': '/assets/blog-images/reading-books.jpg',
    'creating-margin': '/assets/blog-images/peaceful-meadow.jpg',
    'faith-therapy-together': '/assets/blog-images/self-care.jpg',
    'spiritual-conviction-toxic-shame': '/assets/blog-images/candle-light.jpg',
    'anxiety-trust-dual-approach': '/assets/blog-images/faith-hands.jpg',
    'neuroscience-of-forgiveness': '/assets/blog-images/healthy-lifestyle.jpg',
    'depression-dark-night-soul': '/assets/blog-images/nature-serenity.jpg',
    'boundaries-spiritual-practice': '/assets/blog-images/forest-path.jpg',
    'psychology-of-lament': '/assets/blog-images/yoga-mat.jpg',
    'self-compassion-vs-condemnation': '/assets/blog-images/zen-garden.jpg',
    'trauma-informed-faith': '/assets/blog-images/ocean-waves.jpg',
    'rest-as-resistance': '/assets/blog-images/wellness-spa.jpg',
}

# Pattern to find each blog post and replace its image
for slug, new_image in image_mapping.items():
    # Create pattern to match the specific post
    pattern = rf"(slug: '{slug}'.*?image: )'[^']+'"
    replacement = rf"\1'{new_image}'"
    content = re.sub(pattern, replacement, content, flags=re.DOTALL)

# Write back
with open('/Users/spadecreative/CascadeProjects/Windsurf-Projects/the-faithful-mindset/src/data/blogPosts.ts', 'w') as f:
    f.write(content)

print(f"Updated {len(image_mapping)} blog posts with unique images")

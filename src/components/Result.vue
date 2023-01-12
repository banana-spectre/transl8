<template>
    <div class="px-8 flex flex-col w-full mt-8 lg:mt-0">
        <p class="font-actor font-bold text-xl">ENGLISH TRANSLATION</p>
        <div class="bg-white rounded-xl border-purple-900 border-2 text-white h-32 p-2 lg:bg-none">
            <div class="rounded-xl  min-h-[4.5rem] lg:min-h-[7.50rem] text-black text-lg">
                <p :class="{'text-neutral-400': !englishTranslation }">{{ englishTranslation ? englishTranslation : "No results yet." }}</p>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    props: {
        englishTranslation: String
    }
}
</script>
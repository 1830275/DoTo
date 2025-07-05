<template>
  <div class="max-w-2xl mx-auto mt-5 p-10 bg-white shadow-lg rounded-2xl">
    <h1 class="text-3xl font-bold text-[#FFDCDC] flex items-center gap-2 mb-6">
      <span class="text-4xl">✦</span> <span class="text-[#FFD6BA]">FAQs</span>
    </h1>

    <div
      v-for="(item, index) in faqs"
      :key="index"
      class="border-b border-[#F2BED1] py-4 hover:bg-[#FFF2EB] transition-colors duration-300 rounded-md px-2"
    >
      <button
        @click="toggle(index)"
        class="flex justify-between items-center w-full text-left focus:outline-none"
      >
        <span class="font-semibold text-lg">{{ item.question }}</span>
        <span class="text-xl font-bold text-[#F2BED1]">
          {{ activeIndex === index ? "−" : "+" }}
        </span>
      </button>
      <transition name="fade-slide">
        <div v-show="activeIndex === index" class="mt-2 text-gray-600">
          {{ item.answer }}
        </div>
      </transition>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const faqs = [
  {
    question: "How many team members can I invite?",
    answer:
      "You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.",
  },
  {
    question: "What is the maximum file upload size?",
    answer:
      "No more than 2GB. All files in your account must fit your allotted storage space.",
  },
  {
    question: "How do I reset my password?",
    answer:
      "Click “Forgot password” from the login page or “Change password” from your profile page.",
  },
  {
    question: "Can I cancel my subscription?",
    answer:
      "Yes! Send us a message and we’ll process your request no questions asked.",
  },
  {
    question: "Do you provide additional support?",
    answer:
      "Chat and email support is available 24/7. Phone lines are open during normal business hours.",
  },
];

const activeIndex = ref(null);

function toggle(index) {
  activeIndex.value = activeIndex.value === index ? null : index;
}
</script>

<style scoped>
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.3s ease;
  overflow: hidden;
}
.fade-slide-enter-from {
  opacity: 0;
  transform: translateY(-10px);
  max-height: 0;
}
.fade-slide-enter-to {
  opacity: 1;
  transform: translateY(0);
  max-height: 200px;
}
.fade-slide-leave-from {
  opacity: 1;
  transform: translateY(0);
  max-height: 200px;
}
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-10px);
  max-height: 0;
}
</style>

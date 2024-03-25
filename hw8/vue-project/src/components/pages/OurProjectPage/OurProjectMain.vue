<template>
  <div class="center">
    <section class="project">
      <OurProjectCategory @activCategories="activCategories" />
      <router-link to="/project-details" class="href">
        <OurProjectCard :projects="projects" />
      </router-link>
        <div class="project__count-page">
        <router-link to="/project-details" class="href">
            <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" fill="none">
              <circle cx="35" cy="35" r="35" fill="#F4F0EC" />
              <path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round"
                stroke-linejoin="round" />
            </svg>
        </router-link>
      </div>
    </section>
  </div>
</template>

<script>
import OurProjectCard from './OurProjectCard.vue';
import OurProjectCategory from './OurProjectCategory.vue';

export default {
  name: 'OurProjectMain',

  components: {
    OurProjectCategory,
    OurProjectCard
  },

  data() {
    return {
      projects:[],
      projectsOne: [
        {
          id: 1,
          image: 'project__item_1.jpg',
          title: 'Minimal Bedroom',
          text: 'Decor / Artchitecture'
        },
        {
          id: 2,
          image: 'project__item_3.jpg',
          title: 'Minimal Bedroom',
          text: 'Decor / Artchitecture'
        },
        {
          id: 3,
          image: 'project__item_5.jpg',
          title: 'Minimal Bedroom',
          text: 'Decor / Artchitecture'
        },
        {
          id: 4,
          image: 'project__item_7.jpg',
          title: 'Minimal Bedroom',
          text: 'Decor / Artchitecture'
        },
        {
          id: 5,
          image: 'project__item_2.jpg',
          title: 'Minimal Bedroom',
          text: 'Decor / Artchitecture'
        },
        {
          id: 6,
          image: 'project__item_4.jpg',
          title: 'Minimal Bedroom',
          text: 'Decor / Artchitecture'
        },
        {
          id: 7,
          image: 'project__item_6.jpg',
          title: 'Minimal Bedroom',
          text: 'Decor / Artchitecture'
        },
        {
          id: 8,
          image: 'project__item_8.jpg',
          title: 'Minimal Bedroom',
          text: 'Decor / Artchitecture'
        }
      ],
      projectsNew: [
        {
          id: 1,
          image: 'project__item_2.jpg',
          title: 'Minimal Bedroom',
          text: 'Decor / Artchitecture'
        },
        {
          id: 2,
          image: 'project__item_4.jpg',
          title: 'Minimal Bedroom',
          text: 'Decor / Artchitecture'
        },
        {
          id: 3,
          image: 'project__item_6.jpg',
          title: 'Minimal Bedroom',
          text: 'Decor / Artchitecture'
        },
        {
          id: 4,
          image: 'project__item_8.jpg',
          title: 'Minimal Bedroom',
          text: 'Decor / Artchitecture'
        },
        {
          id: 5,
          image: 'project__item_1.jpg',
          title: 'Minimal Bedroom',
          text: 'Decor / Artchitecture'
        },
        {
          id: 6,
          image: 'project__item_3.jpg',
          title: 'Minimal Bedroom',
          text: 'Decor / Artchitecture'
        },
        {
          id: 7,
          image: 'project__item_5.jpg',
          title: 'Minimal Bedroom',
          text: 'Decor / Artchitecture'
        },
        {
          id: 8,
          image: 'project__item_7.jpg',
          title: 'Minimal Bedroom',
          text: 'Decor / Artchitecture'
        }
      ],
      projectsTwo: [
        {
          id: 1,
          image: 'project__item_5.jpg',
          title: 'Minimal Bedroom',
          text: 'Decor / Artchitecture'
        },
        {
          id: 2,
          image: 'project__item_2.jpg',
          title: 'Minimal Bedroom',
          text: 'Decor / Artchitecture'
        },
        {
          id: 3,
          image: 'project__item_3.jpg',
          title: 'Minimal Bedroom',
          text: 'Decor / Artchitecture'
        },
        {
          id: 4,
          image: 'project__item_4.jpg',
          title: 'Minimal Bedroom',
          text: 'Decor / Artchitecture'
        },
        {
          id: 5,
          image: 'project__item_1.jpg',
          title: 'Minimal Bedroom',
          text: 'Decor / Artchitecture'
        },
        {
          id: 6,
          image: 'project__item_6.jpg',
          title: 'Minimal Bedroom',
          text: 'Decor / Artchitecture'
        },
        {
          id: 7,
          image: 'project__item_7.jpg',
          title: 'Minimal Bedroom',
          text: 'Decor / Artchitecture'
        },
        {
          id: 8,
          image: 'project__item_8.jpg',
          title: 'Minimal Bedroom',
          text: 'Decor / Artchitecture'
        }
      ]
    }
  },

  mounted() {
    
  },

  created () {
    this.projects = this.projectsOne
  },

  methods: {
    activCategories (data) {
      switch (data.id) {
        case 1:
          this.projects = this.projectsTwo;
          break;
        case 2:
          this.projects = this.projectsOne;
          break;
        case 3:
          this.projects = this.projectsNew;
          break;
        case 4:
          this.projects = this.projectsNew;
          break;
      }
    }
  }
};

</script>
<style lang="scss" scoped>
$width_site: 1200px;
.project {
  &__count-page {
    margin-top: 51px;
    margin-bottom: 200px;
    display: flex;
    justify-content: center;

    &-wrap {
      display: flex;
      gap: 20px;
    }

    &-number {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: nowrap;
      border: 1px #cda274 solid;
      width: 52px;
      height: 52px;
      border-radius: 52px;

      &-text {
        color: #292f36;
        font-family: "Jost";
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: 150%;
        text-transform: capitalize;
      }

      &:hover {
        background: #f4f0ec;
        border: none;
        width: 54px;
        height: 54px;
      }
    }

    &-svg:hover {
      fill: #f4f0ec;

      & circle {
        stroke: none;
      }
    }
  }
}
.href{
  text-decoration: none;
  color:#292f36;
}
</style>
export function projectsSection(){
     const d = document,
          $main = d.querySelector('main'),
          $projectsSection = d.createElement('section')

     $main.classList.add('main-projects')
     $projectsSection.classList.add('projects-section')
     return $projectsSection
}
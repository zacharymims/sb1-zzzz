interface BreadcrumbItem {
  label: string;
  path?: string;
  clickable: boolean;
}

export function getBreadcrumbs(pathname: string): BreadcrumbItem[] {
  const paths = pathname.split('/').filter(Boolean);
  const breadcrumbs: BreadcrumbItem[] = [
    { label: 'Home', path: '/', clickable: true }
  ];

  let currentPath = '';
  paths.forEach((segment, index) => {
    currentPath += `/${segment}`;
    
    // Special handling for state path
    if (segment === 'state' && index + 1 < paths.length) {
      // Skip the 'state' part in the breadcrumb
      return;
    }

    // Format the state name or other path segments
    const formattedLabel = segment === 'state' 
      ? 'State'
      : segment.split('-')
          .map(word => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ');

    // For state names, link to the state page
    const isState = paths[index - 1] === 'state';
    const breadcrumbPath = isState ? `/state/${paths[index]}` : undefined;

    breadcrumbs.push({
      label: formattedLabel,
      path: breadcrumbPath,
      clickable: isState
    });
  });

  return breadcrumbs;
}
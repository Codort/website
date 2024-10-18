export default function (formName: string): Object {
  let actionLink: string;
  let tagIds: string;

  if (formName === 'newsletter') {
    actionLink =
      'https://codort.us14.list-manage.com/subscribe/post?u=1ace6638ad702b3ee9eb639b1&amp;id=6e0c8184b8&amp;v_id=4930&amp;f_id=00ceb7e5f0';
    tagIds = '40182030';
  } else if (formName === 'adopter') {
    actionLink =
      'https://codort.us14.list-manage.com/subscribe/post?u=1ace6638ad702b3ee9eb639b1&amp;id=6e0c8184b8&amp;v_id=4926&amp;f_id=001db7e5f0';
    tagIds = '40182031';
  } else {
    actionLink =
      'https://codort.us14.list-manage.com/subscribe/post?u=1ace6638ad702b3ee9eb639b1&amp;id=6e0c8184b8&amp;v_id=4932&amp;f_id=0002b7e5f0';
    tagIds = '40182032';
  }

  return { actionLink: actionLink, tagIds: tagIds };
}

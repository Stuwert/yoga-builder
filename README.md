# yoga-builder

This is a yoga asana API which is available for you to use, and which serves as the backend for the [Yoga Builder front end](https://github.com/Stuwert/yoga-fe).

## documentation

__Queries__

Send a GET request to baseurl.com/api with a query string.

Specify datatype as JSON or you will be presented a res.send of the output!

If you are looking for multiple categories or whatever, separate by %20.

Parameters:

1. pose: a numerical index

2. posename: an encoded string. the name of a pose to search for.

3. poses: takes 'all' or 'random'

4. category: a string. can be one, or a combination, of the following:

  * standing

  * seated

  * prone

  * balancing

  * arm balance

  * inversion

  * forward bend

  * twist

  * backbend

  * supine

5. Difficulty: string. beginner, intermediate, expert

Examples:

* baseurl.com/api?poseid=5

* baseurl.com/api?category={standing,forward fold}&difficulty=easy

* baseurl.com/api?poses=random

__Payload__

You will get an object back on success.

It will look like this:

```
{ results:
  [
    {
      pose_id: 1
      pose_name: 'Revolved Bird of Paradise Pose',
      sanskrit_name: 'Parivṛtta Svarga Dvijāsana',
      translation:
       [ 'parivṛtta = revolved',
         'svarga = heaven',
         'dvija = twice born',
         'āsana = posture' ],
      category: [
        'Standing',
        'Balancing'],
      difficulty: 'Expert',
      description:
       [ 'From 'chair_twist.html pose, the lower arm reaches back around the legs as the upper arm wraps around the back and the fingers of the respective hands eventually meet and interlace.  One foot stays rooted into the earth and straightens while the opposite leg comes up with a bent knee.  Once you are standing upright extend the leg towards the sky.  The ribcage is lifted and the heart is open in the full expression of the pose.  The gaze is forward.' ],
      benefits: 'Increases the flexibility of the spine and back and stretches the shoulders.  Strengthens the legs.  Increases flexibility of the hip and knee joints.  Improves balance.  Opens the groin.  Stretches the hamstrings.' },
    {
      pose_id: 2
      pose_name: 'Happy Baby Pose',
      sanskrit_name: 'Ānanda Bālāsana',
      translation: [ 'ānanda = happy', 'bāla = child', 'āsana = posture' ],
      alt_name: [
        'Blissful Baby',
        'Dead Bug'],
      category: [
        'Supine',
        'Balancing'],
      difficulty: 'Beginner',
      description: [ 'From a supine position, on your back, the knees are bent slightly wider than the hips.  The ankles and shins track the knees in a 90 degree angle perpendicular to the earth.  The hands grip the inside sole of the flexed feet (if you have difficultly holding the feet loop a strap over each sole) and push the knees down, coaxing the thighs in toward the torso, lengthening the spine, releasing the tail bone towards the earth and extending the base of the skull away from the back of the neck.  The gaze is up towards the sky.' ],
      benefits: 'Gently stretches the inner groins and the back spine.  Calms the brain and helps relieve stress and fatigue.'
    }
  ]
}
```

## production

The API is deployed live at httphyperlink.

## installation

1. fork/clone

2. npm install

3. npm start

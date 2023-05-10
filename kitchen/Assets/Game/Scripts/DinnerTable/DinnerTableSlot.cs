using DG.Tweening;
using UnityEngine;

public class DinnerTableSlot : MonoBehaviour
{
   public Transform positionSlot;
   
   [SerializeField] private Transform posStartChair;
   [SerializeField] private Transform posEatingChair;
   [SerializeField] private Transform chair;

   public void StartAnimChair(float timeDelay, float timeAnim)
   {
      DOVirtual.DelayedCall(timeDelay, () => chair.DOMove(posEatingChair.position, timeAnim));
   }

   public void PlayAnimChair(float timeAnim)
   {
      chair.DOMove(posEatingChair.position, timeAnim);
   }

   public void EndAnimChair(float timeAnim)
   {
      chair.DOMove(posStartChair.position, timeAnim);
   }

}

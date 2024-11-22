import { DeviceConfig } from "..";

const HY320CommandCodes = {
  power:
    "9121 4465 626 486 645 496 622 515 650 467 647 492 650 488 622 492 652 491 616 1640 645 1635 651 1629 599 1634 646 1634 622 1638 620 1638 644 1634 621 497 615 523 618 1640 641 497 645 1610 645 491 623 517 620 493 618 1663 625 1634 663 508 612 1631 598 516 630 1627 622 1658 621 1636 623 40199 9085 2196 610",
  mute: "8980 4420 630 520 580 570 580 520 580 570 580 520 580 570 580 570 530 570 580 1620 580 1670 580 1620 630 1620 580 1620 630 1620 580 1620 630 1620 580 1620 630 570 530 570 580 570 530 570 580 570 580 520 580 570 580 520 580 1620 630 1620 580 1620 630 1620 580 1620 630 1620 580 1670 580",
  miracast:
    "8980 4420 580 570 580 520 630 520 580 520 630 520 580 520 630 520 580 520 630 1620 580 1620 630 1620 580 1620 630 1620 580 1670 580 1620 630 1620 580 520 630 520 580 520 630 1620 580 1620 580 570 580 520 580 1670 580 1670 530 1670 580 1670 580 520 580 570 580 1620 580 1670 580 520 580",
  airplay:
    "8980 4420 630 520 580 520 630 520 580 520 630 520 580 520 630 520 630 520 580 1620 630 1620 580 1620 630 1620 580 1620 630 1620 580 1620 630 1620 630 1570 630 1620 630 520 580 520 630 1620 580 520 630 520 580 1620 630 520 580 520 630 1620 580 1620 630 520 630 1620 580 1620 630 520 580",
  mouse:
    "8980 4420 630 520 580 520 630 520 580 520 630 520 630 470 630 520 580 520 630 1620 630 1570 630 1620 630 1620 580 1620 630 1620 580 1620 630 1620 580 520 630 1620 580 570 580 520 630 520 580 520 630 520 580 1620 630 1620 580 520 630 1620 580 1620 630 1620 630 1620 580 1620 630 520 580",
  up: "8980 4420 630 520 580 570 580 520 580 570 580 520 580 570 580 520 580 570 580 1620 580 1620 630 1620 580 1670 580 1620 580 1670 580 1620 630 1620 580 1620 630 1620 580 570 580 520 580 570 580 520 580 570 580 520 580 570 580 570 530 1620 630 1620 630 1620 580 1620 630 1620 580 1620 630",
  left: "8980 4420 630 520 580 570 580 520 580 570 580 570 580 520 580 570 580 520 580 1620 630 1620 630 1570 630 1620 580 1620 630 1620 580 1620 630 1620 580 570 580 1620 630 1620 580 1620 630 520 580 570 580 520 580 570 580 1620 580 570 580 520 630 520 580 1620 630 1620 580 1620 630 1620 580",
  enter:
    "8980 4420 630 520 580 570 580 520 580 520 630 520 580 570 580 520 580 570 580 1620 580 1620 630 1620 630 1620 580 1620 630 1620 580 1620 630 1620 580 1620 630 1620 580 1620 630 520 580 520 630 520 630 520 580 570 580 520 580 520 630 520 580 1620 630 1620 580 1620 630 1620 580 1620 630",
  right:
    "8980 4420 580 520 630 520 580 570 580 520 630 520 580 520 630 520 580 520 630 1620 580 1620 630 1620 580 1620 630 1620 580 1620 630 1620 580 1620 630 520 580 1670 580 520 630 1620 580 1620 630 520 580 520 630 520 580 1620 630 520 580 1620 630 520 580 520 630 1620 580 1620 630 1620 580",
  down: "8980 4420 580 570 580 570 580 520 580 570 530 570 580 570 580 520 580 570 580 1620 580 1620 630 1620 580 1620 630 1620 580 1670 580 1620 630 1620 580 570 580 1620 580 570 580 520 580 570 580 520 580 570 580 520 580 1670 580 570 530 1670 580 1620 630 1620 580 1620 630 1620 580 1620 630",
  back: "9030 4420 580 570 580 520 580 570 580 520 580 570 580 570 530 570 580 570 530 1670 580 1620 630 1620 580 1620 630 1620 580 1620 630 1620 580 1620 630 520 580 570 580 1620 580 1670 580 1620 630 520 580 1620 630 520 580 1620 630 1620 580 570 580 520 580 570 580 1620 580 570 580 1620 580",
  options:
    "8980 4420 580 570 580 570 580 520 580 570 580 520 580 570 580 520 580 570 580 1620 580 1620 630 1620 580 1620 630 1620 630 1620 580 1620 630 1620 580 1620 630 1620 580 570 580 520 580 1620 630 520 580 570 580 570 530 570 580 570 530 1670 580 1620 630 520 580 1620 630 1620 580 1620 630",
  home: "8980 4420 580 570 580 520 580 570 580 520 630 520 580 520 630 520 580 570 580 1620 580 1620 630 1620 580 1620 630 1620 580 1620 630 1620 630 1620 580 570 580 520 580 570 580 1620 580 570 580 520 580 1670 580 570 580 1570 630 1620 630 1620 580 570 580 1620 580 1620 630 520 580 1620 630",
  volumeDown:
    "8980 4420 580 570 580 570 530 570 580 570 580 520 580 570 580 520 580 570 580 1620 580 1620 630 1620 580 1670 580 1620 630 1620 580 1620 630 1620 580 570 580 520 580 570 580 1620 580 1670 580 570 530 1670 580 570 580 1620 580 1620 630 1620 580 570 580 520 580 1670 580 570 530 1670 530",
  volumeUp:
    "8980 4420 580 570 580 570 580 520 580 570 580 520 580 570 580 520 580 570 580 1620 580 1620 630 1620 580 1620 630 1620 580 1670 580 1620 630 1620 580 1620 630 1620 580 570 580 1620 580 570 580 520 580 570 580 570 530 570 580 570 580 1620 580 570 580 1620 580 1620 630 1620 580 1620 630",
  connectionsConfig:
    "9075 4482 611 516 591 546 597 515 622 515 590 548 594 516 617 521 590 543 594 1664 588 1660 618 1659 594 1658 591 1666 613 1657 593 1677 573 1685 598 1675 577 517 625 514 584 1683 600 517 608 531 594 530 609 515 587 548 594 1653 596 1661 616 515 594 1663 617 1654 600 1653 594 1661 617 40113 9095 2203 595",
} as const;

export const magcubicHY320: DeviceConfig = {
  brand: "Magcubic",
  model: "HY320",
  type: "projector",
  commandCodes: HY320CommandCodes,
};
